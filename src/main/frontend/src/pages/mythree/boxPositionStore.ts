import create from 'zustand'

const boxPositionStore = create(
  (set:any) => 
    (
      { 
        boxPositionList: [],
        setBoxPositionList: (state: any) => {set({boxPositionList:state});}
      }
    )
)

export default boxPositionStore;