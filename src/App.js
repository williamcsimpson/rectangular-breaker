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
  Table,
  TableRow,
  TableCell,
  TableBody,
} from 'grommet';
import {
  Add,
  Subtract,
} from 'grommet-icons'
import { act } from 'react-dom/test-utils';

const ENGLISH_BIGRAMS = [[11,193,388,469,20,100,233,20,480,20,103,1052,281,1878,8,222,0,1180,1001,1574,137,212,57,26,312,23],
                         [932,57,16,8,3220,0,0,0,605,57,0,1243,49,0,965,0,0,662,229,49,727,16,0,0,1165,0],
                         [1202,0,196,4,1707,0,0,1277,761,0,324,369,15,11,2283,0,4,426,87,893,347,0,0,0,94,0],
                         [1044,20,26,218,3778,7,132,7,1803,33,0,125,178,53,733,0,7,324,495,13,601,99,40,0,264,0],
                         [660,36,433,1195,438,142,125,21,158,5,36,456,340,1382,40,192,34,1927,1231,404,48,215,205,152,121,4],
                         [838,0,0,0,1283,924,0,0,1608,0,0,299,9,9,2788,0,0,1215,26,496,462,0,0,0,43,0],
                         [1078,0,0,18,2393,0,177,1281,839,0,0,203,27,451,1140,0,0,1325,256,247,512,0,0,0,53,0],
                         [1770,5,14,8,5624,0,0,5,1168,0,0,16,16,38,786,0,0,153,27,233,85,0,11,0,41,0],
                         [380,82,767,459,437,129,280,2,16,0,50,567,297,2497,893,100,8,342,1194,1135,11,250,0,23,2,79],
                         [1259,0,0,0,1818,0,0,0,350,0,0,0,0,0,3147,0,0,70,0,0,3356,0,0,0,0,0],
                         [395,28,0,28,5283,28,0,198,1582,0,113,198,28,565,198,0,0,85,1102,28,28,0,0,0,113,0],
                         [1342,19,22,736,1918,105,108,0,1521,0,79,1413,82,4,778,41,0,34,389,254,269,56,11,0,819,0],
                         [1823,337,26,0,2976,10,0,0,1345,0,0,10,654,42,1246,722,0,26,244,5,337,5,0,0,192,0],
                         [550,4,621,1681,1212,102,1391,13,665,9,66,73,104,194,528,4,7,11,751,1641,124,68,18,2,157,4],
                         [85,101,162,231,37,1299,82,25,92,14,78,416,706,2191,222,292,0,1531,357,396,947,334,345,12,41,4],
                         [1358,0,6,0,1747,0,0,237,423,0,0,812,73,6,1511,581,0,2305,180,287,457,0,0,0,17,0],
                         [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10000,0,0,0,0,0],
                         [1026,33,172,282,2795,31,175,17,1181,0,205,164,303,325,1114,55,0,212,655,596,192,142,17,2,306,0],
                         [604,12,284,27,1795,24,0,561,1177,0,91,145,112,21,706,386,9,27,836,2484,579,0,39,0,81,0],
                         [619,3,36,2,1417,7,2,3511,1406,0,0,101,44,15,1228,3,0,479,418,213,195,5,88,0,203,5],
                         [344,415,491,243,434,52,382,10,258,0,14,1097,329,1518,19,386,0,1460,1221,1255,29,14,0,10,14,5],
                         [749,0,0,23,6013,0,0,0,2568,0,0,0,12,0,530,0,0,0,23,0,12,12,0,0,58,0],
                         [2290,8,0,32,1942,0,0,1422,2104,0,0,41,0,357,1292,0,0,106,366,16,0,0,0,0,24,0],
                         [672,0,1119,0,1269,0,0,75,1119,0,0,0,75,0,75,3507,0,0,0,1716,0,0,0,373,0,0],
                         [586,34,103,69,2898,0,0,0,691,0,34,172,379,172,2208,310,0,310,1518,172,138,0,103,0,69,34],
                         [2278,0,0,0,4557,0,0,0,2152,0,0,127,0,0,506,0,0,0,0,0,127,0,0,0,0,253]];

const ENGLISH_BIGRAMS_TOTAL = 1000.0;

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
  
  let cols = Array(period);
  for(let i = 0; i < period; i++) {
    cols[i] = [];
  }
  for(let i = 0; i < Math.floor(message.length/period) * period; i++) {
    cols[i%period].push(message.charAt(i));
  }

  for(let i = 0; i < period; i++) {
    for(let j = 0; j < period; j++) {
      if(i === j) {
        continue;
      }
      let bigrams = new Map();
      let total = 0;
      for(let idx = 0; idx < cols[i].length; idx++) {
        let bigram = cols[i][idx] + cols[j][idx];
        total = total + 1;
        if(bigrams.has(bigram)) {
            bigrams.set(bigram, bigrams.get(bigram) + 1);
        } else {
            bigrams.set(bigram, 1);
        }
      }
      //let bigramStat = Math.log(total + 1);
      let bigramStat = 0;
      for(const [key, value] of bigrams) {
        //let actProb = value / (1.0 * total);
        let actProb = value;
        let engProb = ENGLISH_BIGRAMS[key.charCodeAt(0)- A_CODE][key.charCodeAt(1) - A_CODE] / (ENGLISH_BIGRAMS_TOTAL);
        bigramStat += engProb * Math.log10(actProb + 1);
      }

      output[i][j] = Math.floor(bigramStat);
    }
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
    // eslint-disable-next-line
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
    // eslint-disable-next-line
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
