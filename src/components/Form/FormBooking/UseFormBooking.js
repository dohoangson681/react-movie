import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getMovieListAction } from "../../../redux/action/MovieAction"
import { MovieListReducer } from "../../../redux/reducers/MovieListReducer"




export const UseFormBooking =()=>{
    const{listMovie} = useSelector(state => state.MovieListReducer)
    const dispatch = useDispatch()
    useEffect(() => { 
        dispatch(getMovieListAction())
     },[dispatch])
}