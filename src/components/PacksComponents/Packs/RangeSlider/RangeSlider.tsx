import {useCallback, useMemo, useState, MouseEvent} from "react";
import styles from "./RangeSlider.module.css";
import {useDispatch} from "react-redux";
import {fetchPacksTC} from "../../../../redux/reducers/reducerPacks";

//types
type RangeComponentPropsType = {
  onChangePageCount: (value: number) => void
}


export function RangeComponent(props: RangeComponentPropsType) {
  const [parentVal, setParentVal] = useState(10);
  const sliderValueChanged = useCallback(val => {
    setParentVal(val);
  }, []);

  const sliderProps = useMemo(
      () => ({
        min: 0,
        max: 100,
        value: parentVal,
        step: 5,
        onChange: (e: any) => sliderValueChanged(e),
        onChangePageCount: props.onChangePageCount
      }), [parentVal]
  );

  return (
      <div>
        <RangeSlider {...sliderProps}
                     onChangePageCount={props.onChangePageCount}
        />
      </div>
  )
}


export const RangeSlider = ({
                              onChange,
                              value,
                              onChangePageCount,
                              ...sliderProps
                            }: any) => {

  const [sliderVal, setSliderVal] = useState(0);
  const dispatch = useDispatch()

  const onClickHandler = (e: any) => {
    dispatch(fetchPacksTC(+e.currentTarget.value))
  }

  const changeCallback = (e: any) => {
    setSliderVal(+e.target.value);
  }

  return (
      <div className={styles.range}>
        <div>Number of cards</div>
        <span
            className={styles.title}>value: <strong>{sliderVal}</strong></span>
        <input {...sliderProps}
               type="range"
               value={sliderVal}
               onChange={changeCallback}
               onClick={onClickHandler}
        />
      </div>
  )
}
