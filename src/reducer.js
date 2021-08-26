
 const initialState ={
     id:1,
     Ttitle:["light,camera in actionletes job ","this is good for you","not"],
     Ttime:[8],
     Treader:[122,322,42],
  
 }
 
 

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "OK":
            return (state);
        default:
            return (state);
    }
}
export default reducer;