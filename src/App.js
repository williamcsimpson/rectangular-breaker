import React from 'react';
import { 
  Box, 
  Button,
  Grid,
  Grommet,
  Main,
  Text,
  TextArea,
  TextInput,
  RadioButtonGroup,
  CheckBox,
  Table,
  TableHeader,
  TableRow,
  TableCell,
  TableBody,
  RadioButton,
} from 'grommet';
import {
  Add,
  Subtract,
} from 'grommet-icons'

const A_CODE = 65;
const Z_CODE = 90;
const NGRAM_SIZE = 5;
const SPACE = ' ';

const theme = {
  global: {
    colors: {
      brand: '#228BE6',
    },
    font: {
      family: 'Courier New',
      size: '18px',
      height: '20px',
    },
  },
};

function HomeGrid(props) { 
  return (
    <Grid
      areas={[
        { name: 'text', start: [0, 0], end: [3, 0] },
        { name: 'key', start: [0, 1], end: [1, 1] },
        { name: 'encrypt', start: [2, 2], end: [2, 2] },
        { name: 'decrypt', start: [3, 2], end: [3, 2] },
        { name: 'break', start: [1, 2], end: [1, 2] },
        { name: 'randPT', start: [2, 1], end: [2, 1] },
        { name: 'randCT', start: [3, 1], end: [3, 1] },
      ]}
      columns={['auto', 'auto', 'auto', 'auto']}
      rows={['medium', 'xxsmall', 'xxsmall']}
      gap='small'
      margin='xlarge'
    >
      <Box gridArea='text'> 
       <TextArea
          onChange = {props.handleMessageEdit}
          value = {props.displayMessage}
          placeholder="Type message here..."
          resize={false}
          fill={true}
          name='TextInput'
          spellCheck='false'
          focus={false}
        />
      </Box>
      <Box gridArea='key'>
        <TextInput
          onChange = {props.handleKeyEdit}
          value = {props.displayKey}
          placeholder='Type key here...'
          spellCheck='false'
          focus={false}
        />
      </Box>
      <Box gridArea='encrypt'>
        <Button
          label='Encrypt'
          size='small'
          onClick = {props.handleEncrypt}
        />
      </Box>
      <Box gridArea='decrypt'>
        <Button
          label='Decrypt'
          size='small'
          onClick={props.handleDecrypt}
        />
      </Box> 
      <Box gridArea='break'>
        <Button
          label='Break'
          size='small'
          onClick={props.handleBreak}
        />
      </Box>
      <Box gridArea='randPT'>
        <Button
          label='Random Plaintext'
          size='small'
          onClick={props.handleRandomPT}
        />
      </Box>
      <Box gridArea='randCT'>
        <Button
          label='Random Cyphertext'
          size='small'
          onClick={props.handleRandomCT}
        />
      </Box>
    </Grid>
  );
}


function BreakGrid(props) { 
  return (
    <Grid
      areas={[
        { name: 'matrix', start: [0, 0], end: [2, 0] },
        { name: 'permutation', start: [3, 0], end: [4, 0] },
        { name: 'period', start: [1, 1], end: [1, 1] },
        { name: 'back', start: [3, 1], end: [3, 1] },
      ]}
      columns={['auto', 'auto', 'auto', 'auto', 'auto']}
      rows={['medium', 'xxsmall']}
      gap='small'
      margin='xlarge'
    >
      <Box gridArea='matrix' alignContent='center' justify='center'>
      </Box>
      <Box gridArea='permutation' alignContent='center' justify='center'> 
      </Box>
      <Box
        gridArea='period'
        direction='row'
        align='baseline'
        alignContent='around'
        alignSelf='stretch'
      >
        <Text>Period:</Text>
        <Button
          icon={<Subtract size='small' />}
          size='small'
          onClick={props.handlePeriodMinus}
        />
        <Button
          icon={<Add size='small'/>}
          size='small'
          onClick={props.handlePeriodPlus}
        />
      </Box>
      <Box 
        gridArea='back'
        direction='row'
        align='baseline'
        alignContent='around'
        alignSelf='stretch'
      >
        <Button
          label='Back'
          size='small'
          onClick={props.handleBack}
        />
      </Box>
    </Grid>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      home: true,
      message: '',
    };
  }

  /* -------------- Change State -------------- */

  updateHome(val) {
    this.setState({
      home:val,
    });
  }

  updateMessage(val) {
    val = processMessage(val);
    this.setState({
      message:val,
      displayMessage:toNGram(val, NGRAM_SIZE),
    });
  }

  /* ---------------- Home Page --------------- */
  
  handleBreak() {
    this.updateHome(!this.state.home);
  }

  handleMessageEdit( event ) {
    this.updateMessage(event.target.value);
  }

  /* ---------------- Break Page -------------- */


  /* ------------------ App ------------------- */

  renderPage() {
    if(this.state.home) {
      return(
          <Box width='large' alignSelf='center'>
            <HomeGrid
              handleBreak={() => this.handleBreak()}
              handleMessageEdit={event => this.handleMessageEdit(event)}
              displayMessage={this.state.displayMessage}
            >
            </HomeGrid>
          </Box>
      );
    } else {
        return(
          <Box width='large' alignSelf='center'>
            <BreakGrid> 
            </BreakGrid>
          </Box>
        );
    }
  }

  render () {
    return (
      <Grommet theme={theme} full>
        <Main>
          {this.renderPage()}
        </Main>
      </Grommet>
    );
  }
}

/**
 * Converts message to upper case, removes all characters not in range [A,Z]
 * @param {String} message the string to be processed
 * @returns processed string
 */
function processMessage(message) {
  let output = '';
  message = message.toUpperCase();
  for(let i = 0; i < message.length; i++) {
    //concat char to the end of output
    let char = message.charCodeAt(i);
    if( A_CODE <= char && char <= Z_CODE ) {
      output += message.charAt(i);
    }
  }
  return output;
}

/**
 * Returns the message broken into blocks of n chars, separated by a space
 * @param {String} message the string to be processed
 * @param {Integer} n the size of each block, must be greater than 0
 * @returns message broken into n-grams
 */
function toNGram(message, n) {
  let output = '';
  for(let i = 0; i < message.length; i++) {
    output += message.charAt(i);
    //if i is at the end of a n-gram, add a space
    if( (i % n) === (n - 1) ) {
      output += SPACE;
    }
  }
  return output;
}

export default App;
