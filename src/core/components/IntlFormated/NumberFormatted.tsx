import React, { useState } from 'react';
import { FormattedNumber } from 'react-intl';
import styles from "./intlFormated.module.scss";
import Text from '../Text';

interface NumberFormattedProps {
    value: number;
    style: "currency" | "unit" | "decimal" | "percent" | undefined
}

function NumberFormatted({ value, style }: NumberFormattedProps) {
    const [inputVal, setValue] = useState<any>()
    const [styleVal, setStyleVal] = useState<"currency" | "unit" | "decimal" | "percent">()
    return (
        <div className={styles.intFormatRow}>
            <div className={styles.intFormatRowHeadline}>
                <Text fontWeight='bold'>FormattedNumber: </Text>
                <FormattedNumber
                    value={inputVal ? inputVal : value}
                    style={styleVal ? styleVal : style}
                />
            </div>
            <div className={styles.intFormatRowSettings}>
                <div className={styles.row}>
                    <Text fontSize='sm' fontWeight='medium'>Value: </Text> <input name='value_input' defaultValue={value} type='number' onChange={(e: any) => setValue(e.target.value)} />
                </div>
                <div className={styles.radioLyt}>
                    <Text fontSize='sm' fontWeight='bold'>Style: </Text>
                    <ul>
                        <li><label><input type='radio' name='style_input' value={'currency'} onChange={((e: any) => setStyleVal(e.target.value))} /> currency</label></li>
                        <li><label><input type='radio' name='style_input' value={'unit'} onChange={((e: any) => setStyleVal(e.target.value))} /> unit</label></li>
                        <li><label><input type='radio' name='style_input' value={'decimal'} onChange={((e: any) => setStyleVal(e.target.value))} defaultChecked={true} /> decimal</label></li>
                        <li><label><input type='radio' name='style_input' value={'percent'} onChange={((e: any) => setStyleVal(e.target.value))} /> percent</label></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default NumberFormatted;
