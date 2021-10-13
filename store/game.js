const BOARD_X = 4
const BOARD_Y = 4
const MISSING_PIECE = 16;

const initialState = {
  pieces: new Array(16),
  isClear: false
}
for(let i = 0; i < BOARD_X*BOARD_Y; ++i){
    initialState.pieces[i] = {pos:i, number:i+1};
}
initialState.pieces[0].number = 2;
initialState.pieces[1].number = 9;
initialState.pieces[2].number = 3;
initialState.pieces[3].number = 4;
initialState.pieces[4].number = 7;
initialState.pieces[5].number = 10;
initialState.pieces[6].number = 6;
initialState.pieces[7].number = 8;
initialState.pieces[8].number = 13;
initialState.pieces[9].number = 1;
initialState.pieces[10].number = 16;
initialState.pieces[11].number = 15;
initialState.pieces[12].number = 14;
initialState.pieces[13].number = 5;
initialState.pieces[14].number = 12;
initialState.pieces[15].number = 11;

export const state = () => JSON.parse(JSON.stringify(initialState))
console.log(state.pieces);

function resetState(){
    Object.assign(state, JSON.parse(JSON.stringify(initialState)))
    for(let i = 0; i < BOARD_X*BOARD_Y; ++i){
        initialState.pieces[i] = {pos:i, number:i+1};
    }
    initialState.pieces[0].number = 2;
    initialState.pieces[1].number = 9;
    initialState.pieces[2].number = 3;
    initialState.pieces[3].number = 4;
    initialState.pieces[4].number = 7;
    initialState.pieces[5].number = 10;
    initialState.pieces[6].number = 6;
    initialState.pieces[7].number = 8;
    initialState.pieces[8].number = 13;
    initialState.pieces[9].number = 1;
    initialState.pieces[10].number = 16;
    initialState.pieces[11].number = 15;
    initialState.pieces[12].number = 14;
    initialState.pieces[13].number = 5;
    initialState.pieces[14].number = 12;
    initialState.pieces[15].number = 11;
}

export const mutations = {
    resetGame (state) {
        console.log("resetGame");
        resetState();
    },
    movePiece(state, {x,y}){
        // クリア済みならピースを移動させない
        if(state.isClear) return;

        //　ピースの移動処理開始
        console.log("movePiece" + x + " " + y);
        let pos = y * 4 + x;
        let clickedPiece = state.pieces.find((x)=>x.pos === pos);
        console.log(clickedPiece);

        //　クリックしたピースと、空白のマスの位置を入れ替える
        let dx = [1,0,-1,0];
        let dy = [0,1,0,-1];
        for(let i = 0; i < 4; ++i){
            let tx = x + dx[i];
            let ty = y + dy[i];
            if(tx < 0 || BOARD_X <= tx) continue;
            if(ty < 0 || BOARD_Y <= ty) continue;
            
            let newPos = ty * BOARD_X + tx;
            let targetPiece = state.pieces.find((x)=>x.pos === newPos && x.number === MISSING_PIECE);

            if(targetPiece === undefined) continue;

            let tmpNumber = clickedPiece.number;
            clickedPiece.number = targetPiece.number;
            targetPiece.number = tmpNumber;

            break;
        }

        // クリア判定
        if(state.pieces.every(x => x.pos === x.number-1))
        {
            state.isClear = true;
        }
    }
}
