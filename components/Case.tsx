import styles from '@Styles/Case.module.scss'
import {useAppDispatch, useAppSelector} from "@Stores/hooks";
import {updateNumber} from "@Stores/gridSlice";

interface IProps {
    num: number
    value: boolean
}

const Case = (props: IProps) => {
    const dispatch = useAppDispatch()

    const grids = useAppSelector(state => state.grids.value)
    const currentGrid = useAppSelector(state => state.settings.currentGrid)

    const last = grids[currentGrid][grids[currentGrid].length-1]

    return <div onClick={() => {dispatch(updateNumber({grid: currentGrid, case: props.num}))}} className={`${styles.number} ${props.value ? styles.selected : ''} ${props.num === last ? styles.last : ''}`}>
        {props.num}
    </div>
}

export default Case
