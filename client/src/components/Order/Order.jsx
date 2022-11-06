import { useDispatch } from "react-redux"
import { sort, filter} from "../../store/actions/actions"
import './Order.css'

export default function Order() {
    const dispatch = useDispatch()
    const onSelectChange = (e) => {
        dispatch(sort(e.target.value))
    }

    const onSelectFilter = (e) => {
        dispatch(filter(e.target.value))
        dispatch(sort("ascent"))
    }

    return (
        <div className="filter">
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