export const FETCH_DUMMY_DATA = "FETCH_DUMMY_DATA";

export const getData = () => dispatch => {
    dispatch({type: FETCH_DUMMY_DATA})
}