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

const RANDOM_PLAINTEXT = ['HACKISADISPLAYORIENTEDDUNGEONSDRAGONSLIKEGAMEBOTHDISPLAYANDCOMMANDSTRUCTURERESEMBLEROGUEFORAGAMEWITHTHESAMESTRUCTUREBUTENTIRELYDIFFERENTDISPLAYAREALCAVEINSTEADOFDULLRECTANGLESTRYQUESTTOGETSTARTEDYOUREALLYONLYNEEDTOKNOWTWOCOMMANDSTHECOMMANDWILLGIVEYOUALISTOFTHEAVAILABLECOMMANDSANDTHECOMMANDWILLIDENTIFYTHETHINGSYOUSEEONTHESCREENTOWINTHEGAMEASOPPOSEDTOMERELYPLAYINGTOBEATOTHERPEOPLEHIGHSCORESYOUMUSTLOCATETHEAMULETOFYENDORWHICHISSOMEWHEREBELOWTHETWENTIETHLEVELOFTHEDUNGEONANDGETITOUTNOBODYHASACHIEVEDTHISYETANDIFSOMEBODYDOESHEWILLPROBABLYGODOWNINHISTORYASAHEROAMONGHEROSWHENTHEGAMEENDSEITHERBYYOURDEATHWHENYOUQUITORIFYOUESCAPEFROMTHECAVESHACKWILLGIVEYOUAFRAGMENTOFTHELISTOFTOPSCORERSTHESCORINGISBASEDONMANYASPECTSOFYOURBEHAVIOURBUTAROUGHESTIMATEISOBTAINEDBYTAKINGTHEAMOUNTOFGOLDYOUVEFOUNDINTHECAVEPLUSFOURTIMESYOURREALEXPERIENCEPRECIOUSSTONESMAYBEWORTHALOTOFGOLDWHENBROUGHTTOTHEEXITTHEREISATENPERCENTPENALTYFORGETTINGYOURSELFKILLED',
                          'THEMOSTNOTICEABLEEFFECTTHISCOMMUNICATIONHASONTHEGAMEISTHEDELAYINMOVINGSUPPOSEAPLAYERTYPESAMOVEFORHISSHIPANDHITSRETURNWHATHAPPENSTHENTHEPLAYERPROCESSSAVESUPMESSAGESTOBEWRITTENTOTHETEMPORARYFILEINABUFFEREVERYSEVENSECONDSORSOTHEPLAYERPROCESSGETSEXCLUSIVEACCESSTOTHETEMPORARYFILEANDWRITESOUTITSBUFFERTOTHEFILETHEDRIVERRUNNINGASYNCHRONOUSLYMUSTREADINTHEMOVEMENTCOMMANDPROCESSITANDWRITEOUTTHERESULTSTHISTAKESTWOEXCLUSIVEACCESSESTOTHETEMPORARYFILEFINALLYWHENTHEPLAYERPROCESSGETSAROUNDTODOINGANOTHERSEVENSECONDUPDATETHERESULTSOFTHEMOVEAREDISPLAYEDONTHESCREENHENCEEVERYMOVEMENTREQUIRESFOUREXCLUSIVEACCESSESTOTHETEMPORARYFILEANYWHEREFROMSEVENTOTWENTYONESECONDSDEPENDINGUPONASYNCHRONYBEFORETHEPLAYERSEESTHERESULTSOFHISMOVESAFTERTHEPLAYERWRITESOUTAFIRSTMOVEMENTMESSAGEASECONDMOVEMENTCOMMANDCANTHENBEISSUEDTHEFIRSTMESSAGEWILLBEINTHETEMPORARYFILEWAITINGFORTHEDRIVERANDTHESECONDWILLBEINTHEFILEBUFFERWAITINGTOBEWRITTENTOTHEFILETHUSBYALWAYSTYPINGMOVESATURNAHEADOFTHETIMETHEPLAYERCANSAILAROUNDQUITEQUICKLY',
                          'IFYOUHAVENEVERPLAYEDSOLITAIREBEFOREITISRECOMMENDEDTHATYOUCONSULTASOLITAIREINSTRUCTIONBOOKINCANFIELDTABLEAUCARDSMAYBEBUILTONEACHOTHERDOWNWARDINALTERNATECOLORSANENTIREPILEMUSTBEMOVEDASAUNITINBUILDINGTOPCARDSOFTHEPILESAREAVAILABLETOBEPLAYEDONFOUNDATIONSBUTNEVERINTOEMPTYSPACESSPACESMUSTBEFILLEDFROMTHESTOCKTHETOPCARDOFTHESTOCKALSOISAVAILABLETOBEPLAYEDONFOUNDATIONSORBUILTONTABLEAUPILESAFTERTHESTOCKISEXHAUSTEDTABLEAUSPACESMAYBEFILLEDFROMTHETALONANDTHEPLAYERMAYKEEPTHEMOPENUNTILHEWISHESTOUSETHEMCARDSAREDEALTFROMTHEHANDTOTHETALONBYTHREESANDTHISREPEATSUNTILTHEREARENOMORECARDSINTHEHANDORTHEPLAYERQUITSTOHAVECARDSDEALTONTOTHETALONTHEPLAYERTYPESHTFORHISMOVEFOUNDATIONBASECARDSAREALSOAUTOMATICALLYMOVEDTOTHEFOUNDATIONWHENTHEYBECOMEAVAILABLE',
                          'ROBOTSPITSYOUAGAINSTEVILROBOTSWHOARETRYINGTOKILLYOUWHICHISWHYTHEYAREEVILFORTUNATELYFORYOUEVENTHOUGHTHEYAREEVILTHEYARENOTVERYBRIGHTANDHAVEAHABITOFBUMPINGINTOEACHOTHERTHUSDESTROYINGTHEMSELVESINORDERTOSURVIVEYOUMUSTGETTHEMTOKILLEACHOTHEROFFSINCEYOUHAVENOOFFENSIVEWEAPONRYSINCEYOUARESTUCKWITHOUTOFFENSIVEWEAPONRYYOUAREENDOWEDWITHONEPIECEOFDEFENSIVEWEAPONRYATELEPORTATIONDEVICEWHENTWOROBOTSRUNINTOEACHOTHERORAJUNKPILETHEYDIEIFAROBOTRUNSINTOYOUYOUDIEWHENAROBOTDIESYOUGETTENPOINTSANDWHENALLTHEROBOTSDIEYOUSTARTONTHENEXTFIELDTHISKEEPSUPUNTILTHEYFINALLYGETYOUONLYFIVESCORESAREALLOWEDPERUSERONTHESCOREFILEIFYOUMAKEITINTOTHESCOREFILEYOUWILLBESHOWNTHELISTATTHEENDOFTHEGAMEIFANALTERNATESCOREFILEISSPECIFIEDTHATWILLBEUSEDINSTEADOFTHESTANDARDFILEFORSCORESY',
                          'ATTHESTARTOFTHEFIRSTGAMETHEPROGRAMASKSTHEPLAYERTOCUTTHEDECKTODETERMINEWHOGETSTHEFIRSTCRIBTHEUSERSHOULDRESPONDWITHANUMBERBETWEENZEROANDFIFTYONEINDICATINGHOWMANYCARDSDOWNTHEDECKISTOBECUTTHEPLAYERWHOCUTSTHELOWERRANKEDCARDGETSTHEFIRSTCRIBIFMORETHANONEGAMEISPLAYEDTHELOSEROFTHEPREVIOUSGAMEGETSTHEFIRSTCRIBINTHECURRENTGAMEFOREACHHANDTHEPROGRAMFIRSTPRINTSTHEPLAYERSHANDWHOSECRIBITISANDTHENASKSTHEPLAYERTODISCARDTWOCARDSINTOTHECRIBTHECARDSAREPROMPTEDFORONEPERLINEANDARETYPEDASEXPLAINEDBELOWAFTERCUTTINGTHEDECKPLAYSTARTSWITHTHENONDEALERTHEPERSONWHODOESNTHAVETHECRIBLEADINGTHEFIRSTCARDPLAYCONTINUESASPERCRIBBAGEUNTILALLCARDSAREEXHAUSTEDTHEPROGRAMKEEPSTRACKOFTHESCORINGOFALLPOINTSANDTHETOTALOFTHECARDSONTHETABLEAFTERPLAYTHEHANDSARESCOREDTHEPROGRAMREQUESTSTHEPLAYERTOSCOREHISHANDANDTHECRIBIFITISHISBYPRINTINGOUTTHEAPPROPRIATECARDSANDTHECUTCARDENCLOSEDINBRACKETSPLAYCONTINUESUNTILONEPLAYERREACHESTHEGAMELIMITACARRIAGERETURNWHENANUMERICINPUTISEXPECTEDISEQUIVALENTTOTYPINGTHELOWESTLEGALVALUEWHENCUTTINGTHEDECKTHISISEQUIVALENTTOCHOOSINGTHETOPCARD'];

const A_CODE = 65;
const Z_CODE = 90;
const ONE_CODE = 49;
const NINE_CODE = 57;
const NGRAM_SIZE = 5;
const MAX_KEY_LEN = 9;
const MIN_KEY_LEN = 2;
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

/* ------------ flowchart --------- */

function keyChart(size, fill) {
}

/* ------------ Display Table ------------- */

function breakTableCell(data, onClick, fill = false) {
  return (
    <Box
      onClick={onClick}
      focusIndicator={false}
      background={fill ? 'light-4': ''}
    >
      <Text alignSelf='center'>{data}</Text>
    </Box>
  );
}

function breakTable(data, onClick, fill) {
  let body = [];
  for(let i = 0; i < data.length; i++) {
    let row =[]
    for(let j = 0; j < data[i].length; j++) {
      row.push(
        <TableCell scope='row' verticalAlign='middle' border='all' pad='none'>
          {breakTableCell(data[i][j], ()=>onClick(i, j), fill[i][j])}
        </TableCell>
      );
    }
    body.push(
      <TableRow>
        {row}
      </TableRow>
    );
  }

  return(
    <Table>
      <TableBody>
        {body}
      </TableBody>
    </Table>
  );
}

/* ------------- ---------*/

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
        {breakTable(props.data, props.handleClickTable, props.tableFill)}
      </Box>
      <Box gridArea='permutation' alignContent='center' justify='center'> 
        {keyChart(0,0)}
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
          label={props.validKey ? 'Confirm' : 'Back'}
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
      displayMessage: '',
      key: '',
      displayKey: '',
      period: '',
      data:[],
      tableFill:[],
      validKey:false,
    };
  }

  /* -------------- Change State -------------- */

  updateValidKey(val) {
    this.setState({
      validKey:val,
    });
  }

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

  updateKey(val) {
    val = processKey(val);
    this.setState({
      key:val,
      displayKey:val,
    });
  }
  
  updatePeriod(val) {
    if( MIN_KEY_LEN <= val && val <= MAX_KEY_LEN) {
      let newKey = '';
      for(let i = 1; i <= val; i++) {
        newKey += i;
      }
      this.updateKey(newKey);
      this.updateValidKey(false);
      this.setState({
        period:val,
        data:calculateTable(val, this.state.message),
        tableFill:emptyTableFill(val),
      });
    }
  }

  updateTableSelection(i, j, val) {
    let newTableFill = this.state.tableFill;
    newTableFill[i][j] = val;
    let temp = countSelections(newTableFill) >= (this.state.key.length - 1);
    this.updateValidKey(temp);
    //this.updateValidKey(countSelections(newTableFill) >= (this.state.key.length - 1))
    this.setState({
      tableFill:newTableFill,
    });
  }

  updateTableSelectionTrue(i, j) {
    let newTableFill = this.state.tableFill;
    for(let k = 0; k < newTableFill.length; k++) {
      newTableFill[i][k] = false;
      newTableFill[k][j] = false;
    }
    newTableFill[i][j] = true;
    this.updateValidKey(countSelections(newTableFill) >= (this.state.key.length - 1))
    this.setState({
      tableFill:newTableFill,
    });
  }

  /* ---------------- Home Page --------------- */
  
  handleBreak() {
    this.updateHome(!this.state.home);
    this.updatePeriod(MIN_KEY_LEN);
    this.updateValidKey(false);

  }

  handleMessageEdit( event ) {
    this.updateMessage(event.target.value);
  }

  handleKeyEdit( event ) {
    this.updateKey(event.target.value);
  }

  handleEncrypt() {
    if(!this.state.key) {
      return;
    }
    if(invalidKey(this.state.key)){
      alert('ERROR: You have entered an invalid key. A valid key is between 2 and 9 numbers long, and contains each of ' +
      'the numbers [1, length] exactly once.');
      return;
    }
    this.updateMessage(encrypt(this.state.message, this.state.key));
  }

  handleDecrypt() {
    if(!this.state.key) {
      return;
    }
    if(invalidKey(this.state.key)){
      alert('ERROR: You have entered an invalid key. A valid key is between 2 and 9 numbers long, and contains each of ' +
      'the numbers [1, length] exactly once.');
      return;
    }
    this.updateMessage(decrypt(this.state.message, this.state.key));
  }

  handleRandomPT() {
    let newMessage = RANDOM_PLAINTEXT[Math.floor(Math.random() * RANDOM_PLAINTEXT.length)];
    while( newMessage === this.state.message ) {
      newMessage = RANDOM_PLAINTEXT[Math.floor(Math.random() * RANDOM_PLAINTEXT.length)];
    }
    this.updateMessage(newMessage);
    this.updateKey('');
  }

  handleRandomCT() {
    let newMessage = RANDOM_PLAINTEXT[Math.floor(Math.random() * RANDOM_PLAINTEXT.length)];
    while( newMessage === this.state.message ) {
      newMessage = RANDOM_PLAINTEXT[Math.floor(Math.random() * RANDOM_PLAINTEXT.length)];
    }
    let key = ''
    let nums = [];
    let keyLen = Math.floor(Math.random() * (MAX_KEY_LEN - 1)) + 2;
    for( let i = 1; i <= keyLen; i++) {
      nums.push(i);
    }
    nums = shuffle(nums);
    for( let i = 0; i < keyLen; i++) {
      key += '' + nums[i];
    }
    newMessage = encrypt(newMessage, key)
    this.updateMessage(newMessage);
    this.updateKey('');
  }

  /* ---------------- Break Page -------------- */

  handleToHome() {
    if(this.state.validKey) {
        let newKey = getKeyFromGraph(this.state.tableFill);
        newKey = invertKey(newKey);
        this.updateKey(newKey);
        this.updateMessage(decrypt(this.state.message, newKey));
    } else {
        this.updateKey('');
    }
    this.updateHome(!this.state.home);
  }

  handleClickTable(i, j) {
    //deselect an item
    if(this.state.tableFill[i][j]) {
      this.updateTableSelection(i, j, false);
      return;
    }
    let newGraph = Array(this.state.tableFill.length);
    for(let  k = 0; k < newGraph.length; k++) {
      newGraph[k] = [...this.state.tableFill[k]];
    }
    for(let k = 0; k < newGraph.length; k++) {
      newGraph[i][k] = false;
      newGraph[k][j] = false;
    }
    newGraph[i][j] = true;
    if(containsCycle(newGraph)){
      return;
    }
    this.updateTableSelectionTrue(i,j);
  }

  handlePeriodPlus() {
    this.updatePeriod(this.state.period + 1);
  }

  handlePeriodMinus() {
    this.updatePeriod(this.state.period - 1);
  }

  /* ------------------ App ------------------- */

  renderPage() {
    if(this.state.home) {
      return(
          <Box width='large' alignSelf='center'>
            <HomeGrid
              handleBreak={() => this.handleBreak()}
              handleMessageEdit={event => this.handleMessageEdit(event)}
              displayMessage={this.state.displayMessage}
              handleEncrypt={() => this.handleEncrypt()}
              handleDecrypt={() => this.handleDecrypt()}
              handleKeyEdit={event => this.handleKeyEdit(event)}
              displayKey={this.state.displayKey}
              handleRandomPT={() => this.handleRandomPT()}
              handleRandomCT={() => this.handleRandomCT()}
            >
            </HomeGrid>
          </Box>
      );
    } else {
        return(
          <Box width='large' alignSelf='center'>
            <BreakGrid
              data={this.state.data}
              handleClickTable={(i,j)=>this.handleClickTable(i,j)}
              tableFill={this.state.tableFill}
              handlePeriodPlus={() => this.handlePeriodPlus()}
              handlePeriodMinus={() => this.handlePeriodMinus()}
              validKey={this.state.validKey}
              handleBack={() => this.handleToHome()}
            > 
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

function getKeyFromGraph(graph) {
  let start = -1;
  for(let j = 0; j < graph.length; j++) {
    let colEmpty = true;
    for(let i = 0; i < graph.length; i++) {
      if(graph[i][j]) {
        colEmpty = false;
        break;
      }
    }
    if(colEmpty) {
      start = j;
      break;
    }
  }

  let key = '';
  let stack = [];
  stack.push(start);
  while(stack.length > 0) {
    let front = stack.pop();
    key += (front + 1);
    for(let j = 0; j < graph.length; j++) {
      if(graph[front][j]) {
        stack.push(j);
      }
    }
  }

  return key;
}

/**
 * counts the number of trues in a 2d boolean array
 * @param {Boolean[][]} arr 2d Boolean array 
 */
function countSelections(arr) {
  let count = 0;
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr[i].length; j++) {
      if(arr[i][j]) {
        count++;
      }
    }
  }
  return count;
}

/**
 * Inverts the given key
 * @param {String} key 
 */
function invertKey(key) {
  let newKey = ''
  for(let i = 1; i <= key.length; i++) {
    newKey += i;
  }
  newKey = decrypt(newKey, key);
  return newKey;
}

/**
 * Returns true if a graph contains a cycle, false otherwise
 * @param {Array} graph 2d boolean array that represents a directed graph 
 */
function containsCycle(graph) {
  let visited = Array(graph.length).fill(false);
  let frontier = Array();
  while( visited.includes(false) ) {
    for(let i = 0; i < visited.length; i++) {
      if(!visited[i]) {
        frontier.push(i);
        break;
      }
    }
    let recentlyVisited = Array(graph.length).fill(false);
    while(frontier.length > 0) {
      const front = frontier.pop();
      visited[front] = true;
      recentlyVisited[front] = true;
      for( let i = 0; i < visited.length; i++){
        if(graph[front][i]){
          if(recentlyVisited[i]) {
            return true;
          }
          frontier.push(i);
        }
      }
    }
  }
  return false;
}

/**
 * Fills a period x period table with false
 * @param {Integer} period 
 */
function emptyTableFill(period) {
  let output = Array(period);
  for(let i = 0; i < period; i++) {
    output[i] = Array(period).fill(false);
  }
  return output;
}

/**
 * Calculates the table data with the given period and message
 * @param {Integer} period 
 * @param {String} message 
 */
function calculateTable(period, message) {
  let output = Array(period);
  for(let i = 0; i < period; i++) {
    output[i] = Array(period).fill(0);
  }
  return output;
}

/**
 * Looks for incorrect keys
 * @param {String} key 
 */
function invalidKey(key) {
  if(key.length > MAX_KEY_LEN) {
    return true;
  }
  let vals = Array(MAX_KEY_LEN);
  for( let i = 0; i < key.length; i++) {
    vals[parseInt(key.charAt(i))-1] = true; 
  }
  for( let i = 0; i < key.length; i++) {
    if(!vals[i]) { 
      return true;
    }
  }
  return false;
}

/**
 * decrypts the message with the key
 * @param {String} message the message to be encrypted
 * @param {String} key must be only numbers from 1 to 9, each number only used once 
 */
function decrypt(message, key) {
  const period = key.length;
  let array = Array(period);
  for(let i = 0; i < period; i++) {
    array[i] = [];
  }
  for(let i = 0; i < message.length; i++) {
    array[i%period].push(message.charAt(i));
  }
  let encryptArray = Array(period);
  for(let i = 0; i < key.length; i++) {
    encryptArray[parseInt(key.charAt(i)) - 1] = array[i];
  }
  let output = '';
  for(let i = 0; i < message.length + period; i++) {
    let char = '';
    if(char = encryptArray[i%period].shift()  ) {
      output += char;
    }
  }
  return output;
}

/**
 * encrypts the message with the key
 * @param {String} message the message to be encrypted
 * @param {String} key must be only numbers from 1 to 9, each number only used once 
 */
function encrypt(message, key) {
  const period = key.length;
  let array = Array(period);
  for(let i = 0; i < period; i++) {
    array[i] = [];
  }
  for(let i = 0; i < message.length; i++) {
    array[i%period].push(message.charAt(i));
  }
  let encryptArray = [];
  for(let i = 0; i < key.length; i++) {
    encryptArray.push(array[parseInt(key.charAt(i)) - 1]);
  }
  let output = '';
  for(let i = 0; i < message.length + period; i++) {
    let char = '';
    if(char = encryptArray[i%period].shift()  ) {
      output += char;
    }
  }
  return output;
}


/**
 * Converts message to upper case, removes all characters not in range [A,Z]
 * @param {String} message the string to be processed
 * @returns processed string
 */
function processKey(message) {
  let output = '';
  for(let i = 0; i < message.length; i++) {
    //concat char to the end of output
    let char = message.charCodeAt(i);
    if( ONE_CODE <= char && char <= NINE_CODE ) {
      output += message.charAt(i);
    }
  }
  return output;
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

/**
 * Credit to: https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
 * Shuffles array in place. ES6 version
 * @param {Array} a items An array containing the items.
 */
function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

export default App;
