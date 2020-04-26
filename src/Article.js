import React from 'react';
import { 
  Box, 
  Heading,
  Markdown,
  Text,
} from 'grommet';

function ArticleText() {
    return (
        <div>
            <Heading level='2' textAlign='center'>Breaking the Rectangular Transposition Encryption System</Heading>
            <Heading level='3' textAlign='start'>How it works</Heading>
                <Text>
                    We shall view Rectangular Transposition in a slightly
                    different manner than we did originally. We assume that 
                    the sender and receiver choose a secret period p and a 
                    secret permutation of length p, say a=(a<sub>1</sub>,a<sub>2</sub>,...,a<sub>p</sub>) where
                    each a<sub>i</sub> is taken from the set {'{1,2,...,p}'} and no two are
                     the same. The plaintext is broken up into blocks of length
                     p and then each block is transposed by the permutation a. 
                     For example, if the (i+1)<sup>st</sup> block of plaintext is 
                     X<sub>ip+1</sub>,X<sub>ip+2</sub>,...,X<sub>ip+p</sub>, then the (i+1)<sup>st</sup> block of cyphertext 
                     would be X<sub>ip+a<sub>1</sub></sub>,X<sub>ip+a<sub>2</sub></sub>,...,X<sub>ip+a<sub>p</sub></sub>. This encryption system is 
                     vulnerable to a biletter-frequency analysis, since letters 
                     that are close together in the plaintext message, tend to 
                     stay close together in the cyphertext message.
                     
                </Text>
                <Text><br />
                    To break Rectangular Transposition encryption, one guesses a period p and then, uses the given matrix of statistics to determine the validity of p according to the following cases:
                </Text>
                <Text>
                    <ol>
                        <li>All the entries in the matrix are approximately the same </li>
                        <li>Each row except one has a maximum that is much larger than all the other entries in the row. Similarly, each column except one has a maximum that is much larger than all the other entries in the column.</li>
                    </ol>
                </Text>
                <Text>
                    In case 1, the opponent concludes that p was a wrong guess for the period and proceeds to repeat the calculations with another value of p. In case 2, the opponent guessed that p is the right value and from the matrix, reconstructs the permutation by clicking on the cell that contains the maximum value. 
                </Text>
            <Heading level='3' textAlign='start'>How to use</Heading>
                <Text>
                    <ul>
                        <li>Upon pressing the Random Cyphertext button, the web app will display some text which is encrypted via a Rectangular Transposition with randomly selected permutation. </li>
                        <li>Press the Break button to start the process. The web app assumes (most often incorrectly) that p=2. Thus it proceeds as if every pair of letters of plaintext was encrypted by reversing the order of the pair. It displays the matrix of statistics and a visual representation of the permutation. </li>
                        <li>Press the Period + several times (if necessary) until an appropriate value of p is obtained. Of course, an appropriate value is found according to the above criteria.</li>
                        <li>Now click in the cells of the matrix that contain the largest value in each row. Arrows will be drawn on the permutation to help keep track of it. For instance, after clicking in the i<sup>th</sup> row and j<sup>th</sup> column, an arrow is drawn from i to j to indicate that the i<sup>th</sup> letter of cyphertext was most likely followed by the j<sup>th</sup> letter of cyphertext.</li>
                        <li>Now you may press the Confirm button. The web app will then decrypt the given cyphertext as if it was encrypted by means of the values of a<sub>1</sub>,a<sub>2</sub>,...,a<sub>p</sub> you have just determined. A look at the resulting text will make it clear if all of your guesses were correct or which, if any, need to be changed. </li>
                    </ul>
                </Text>
        </div>
    );
}

export default ArticleText;