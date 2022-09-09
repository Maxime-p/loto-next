import {useEffect} from "react";
import {ChromePicker, ColorState} from "react-color";

import {useAppDispatch, useAppSelector} from "@Stores/hooks";
import {setCurrentColor, setCurrentGrid, swapModalState} from "@Stores/settingSlice";
import {addGrid, clearGrid, resetGrids} from "@Stores/gridSlice";

import styles from "@Styles/Control.module.scss";

const Control = () => {
    const dispatch = useAppDispatch()

    const grids = useAppSelector(state => state.grids.value)

    const currentGrid = useAppSelector(state => state.settings.currentGrid)
    const currentColor = useAppSelector(state => state.settings.currentColor)
    const modalState = useAppSelector(state => state.settings.modalState)

    const handleColorChange = (color: ColorState) => {
        dispatch(setCurrentColor(color.hex))
    }

    useEffect(() => {
        document.documentElement.style.setProperty('--selected', currentColor)
    }, [currentColor])

    return <>
        <div className={styles.control}>
            <div>
                <button onClick={() => {
                    dispatch(addGrid())
                    dispatch(setCurrentGrid(currentGrid+1))
                }}>Ajouter une grille</button>
                {
                    grids.map((grid, key) => {
                        return <button key={key} onClick={() => dispatch(setCurrentGrid(key))}>{key + 1}</button>
                    })
                }
            </div>
            <div>
                <button onClick={() => dispatch(swapModalState())}/>
                <button onClick={() => {
                    if (window.confirm('Action dangereuse !')) {
                        dispatch(clearGrid(currentGrid))
                    }
                }}>Suppression active</button>
                <button onClick={() => {
                    if (window.confirm('Action dangereuse !')) {
                        dispatch(resetGrids())
                        dispatch(setCurrentGrid(0))
                    }
                }}>Suppression</button>
            </div>
        </div>
        {modalState && <ChromePicker
            className={styles.colorModal}
            color={currentColor}
            onChangeComplete={handleColorChange}
        />}
    </>
}

export default Control
