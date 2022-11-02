import { useDispatch } from "react-redux"
import { sort, filter, reset } from "../../store/actions/actions"

export default function Order() {
    const dispatch = useDispatch()
    const onSelectChange = (e) => {
        dispatch(sort(e.target.value))
    }

    const onSelectFilter = (e) => {
        dispatch(filter(e.target.value))
        dispatch(sort("ascent"))
    }

    const onReset = () => {
        dispatch(reset())
    }
    return (
        <div>
            <div>
                <button onClick={onReset}>Reset Filters/Search</button>
            </div>
            <div>
                <select name='select' onChange={onSelectChange}>
                    <option value="ascent" >Ascent</option>
                    <option value="descent" >Descent</option>
                </select>
            </div>
            <div>
            <select name='select' onChange={onSelectFilter}>
                    <option value="name" >Name</option>
                    <option value="continent" >Continent</option>
                    {/* <option id="descent" >Toutist Activitiy</option> */}
                </select>
            </div>
        </div>
    )
}