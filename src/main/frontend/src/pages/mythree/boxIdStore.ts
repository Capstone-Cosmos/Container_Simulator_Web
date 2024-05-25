import create from 'zustand'

const boxIdStore = create(
  (set:any) => 
    (
      { 
        targetBoxId: null,
        setTargetBoxId: (state: any) => {set({targetBoxId:state});}
      }
    )
)

export default boxIdStore;
