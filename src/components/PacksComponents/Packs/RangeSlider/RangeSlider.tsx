import {useCallback, useEffect, useMemo, useState} from "react";
import styles from "./RangeSlider.module.css";


export function RangeComponent() {
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
        onChange: (e: any) => sliderValueChanged(e)
      }), [parentVal]
  );

  return (
      <div>
        <RangeSlider {...sliderProps}/>
      </div>
  )
}


export const RangeSlider = ({
                              onChange,
                              value,
                              ...sliderProps
                            }: any) => {

  const [sliderVal, setSliderVal] = useState(0);

  useEffect(() => {
    setSliderVal(value);
  }, [value]);

  const changeCallback = (e: any) => {
    setSliderVal(e.target.value);
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
        />
      </div>
  )
}
