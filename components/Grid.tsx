import Case from "@Components/Case";

import {useAppDispatch, useAppSelector} from "@Stores/hooks";

import styles from '@Styles/Grid.module.scss'

const Grid = () => {
    const dispatch = useAppDispatch()

    const grids = useAppSelector(state => state.grids.value)
    const currentGrid = useAppSelector(state => state.settings.currentGrid)

    const fullArray = Array.from(Array(90), (_,i) => i)

    return <div className={styles.container}>
        {
            fullArray.map((value, index) => {
                return <Case key={index} num={index + 1} value={grids[currentGrid].includes(index+1)} />
            })
        }
    </div>
}

export default Grid
