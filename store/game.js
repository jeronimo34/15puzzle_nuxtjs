const BOARD_X = 4
const BOARD_Y = 4
const BLANK = 16;

// 初期状態
const initialState = {
  // ピースの初期位置
  pieces: [
    {pos:0, number:2},
    {pos:1, number:9},
    {pos:2, number:3},
    {pos:3, number:4},
    {pos:4, number:7},
    {pos:5, number:10},
    {pos:6, number:6},
    {pos:7, number:8},
    {pos:8, number:13},
    {pos:9, number:1},
    {pos:10, number:16},
    {pos:11, number:15},
    {pos:12, number:14},
    {pos:13, number:5},
    {pos:14, number:12},
    {pos:15, number:11}, 
  ],
  // クリアフラグ
  isClear: false
}

// 状態初期化
export const state = () => JSON.parse(JSON.stringify(initialState))

// 状態リセット
function resetState(state){
    Object.assign(state, JSON.parse(JSON.stringify(initialState)))
}

export const mutations = {
    // リセットボタン押下時処理
    resetGame (state) {
        resetState(state);
    },
    // ピースの移動処理
    movePiece(state, {x,y}){
        // クリア済みならピースを移動させない
        if(state.isClear) return;

        //　ピースの移動処理開始
        let pos = y * 4 + x;
        let clickedPiece = state.pieces.find((x)=>x.pos === pos);

        //　クリックしたピースと、空白のマスの位置を入れ替える
        let dx = [1,0,-1,0];
        let dy = [0,1,0,-1];
        for(let i = 0; i < 4; ++i){
            let tx = x + dx[i];
            let ty = y + dy[i];
            if(tx < 0 || BOARD_X <= tx) continue;
            if(ty < 0 || BOARD_Y <= ty) continue;
            
            let newPos = ty * BOARD_X + tx;
            let targetPiece = state.pieces.find((x)=>x.pos === newPos && x.number === BLANK);

            if(targetPiece === undefined) continue;

            let tmpNumber = clickedPiece.number;
            clickedPiece.number = targetPiece.number;
            targetPiece.number = tmpNumber;

            break;
        }

        // クリア判定
        state.isClear = state.pieces.every(x => x.pos === x.number-1);
    }
}
