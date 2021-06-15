import React, { useEffect } from 'react';
import { useSelector, useDispatch, connect } from "react-redux";
import { fetchUsersFailure, fetchUsersRequest, fetchUsersSuccess } from "../components/actionCreator";
import axios from "axios";
import uuid from "uuid/dist/v1"

function Cake({ state, dispatch }) {
    // const state = useSelector(state => state)
    // const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchUsersRequest())
        axios.get("http://localhost:5000/products")
            .then(response => {
                let data = response.data.map(sin => {
                    return sin.name
                })
                dispatch(fetchUsersSuccess(data))
            }).catch(error => {
                dispatch(fetchUsersFailure(error.message))
            })
    }, [])
    console.log(state);
    return (
        <div>
            {state.loading ? <p>Loading ... </p> : state.error ? <p>Something went wrong.</p> :
                <ul>
                    {state.users.map(user => (
                        <li key={uuid()}>
                            {user}
                        </li>
                    ))}
                </ul>
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        state: state
    }
}
const mapDispatchToProps = dispatch => {
    return {
        dispatch: dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cake)