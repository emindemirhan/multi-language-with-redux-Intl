import { FormattedDate } from 'react-intl';

import styles from "./intlFormated.module.scss";

import Text from '../Text';
import { useEffect, useState } from 'react';


function DateFormatted() {
    const [dateVal, setDateVal] = useState<any>()
    const [yearVal, setYearVal] = useState<"numeric" | "2-digit">()
    const [monthVal, setMonthVal] = useState<"numeric" | "2-digit" | "long" | "short" | "narrow">()
    const [dayVal, setDayVal] = useState<"numeric" | "2-digit">()
    const date = new Date();

    return (
        <div className={styles.intFormatRow}>
            <div className={styles.intFormatRowHeadline}>
                <Text fontWeight='bold'>FormattedDate: </Text>
                <FormattedDate
                    value={dateVal ? dateVal : date}
                    year={yearVal ? yearVal : "numeric"}
                    month={monthVal ? monthVal : "numeric"}
                    day={dayVal ? dayVal : "numeric"}
                />
            </div>
            <div className={styles.intFormatRowSettings}>
                <div className={styles.row}>
                    <Text fontSize='sm' fontWeight='medium'>Date: </Text>
                    <input name='date_input' type='date' onChange={(e: any) => setDateVal(e.target.value)} />
                </div>
                <div className={styles.radioLyt}>
                    <Text fontSize='sm' fontWeight='bold'>Year: </Text>
                    <ul>
                        <li><label><input type='radio' name='year_input' value={'numeric'} onChange={((e: any) => setYearVal(e.target.value))} /> numeric</label></li>
                        <li><label><input type='radio' name='year_input' value={'2-digit'} onChange={((e: any) => setYearVal(e.target.value))} defaultChecked={true} /> 2-digit</label></li>
                    </ul>
                </div>
                <div className={styles.radioLyt}>
                    <Text fontSize='sm' fontWeight='bold'>Month: </Text>
                    <ul>
                        <li><label><input type='radio' name='month_input' value={'numeric'} onChange={((e: any) => setMonthVal(e.target.value))} /> numeric</label></li>
                        <li><label><input type='radio' name='month_input' value={'2-digit'} onChange={((e: any) => setMonthVal(e.target.value))} defaultChecked={true} /> 2-digit</label></li>
                        <li><label><input type='radio' name='month_input' value={'long'} onChange={((e: any) => setMonthVal(e.target.value))} defaultChecked={true} /> long</label></li>
                        <li><label><input type='radio' name='month_input' value={'short'} onChange={((e: any) => setMonthVal(e.target.value))} defaultChecked={true} /> long</label></li>
                        <li><label><input type='radio' name='month_input' value={'narrow'} onChange={((e: any) => setMonthVal(e.target.value))} defaultChecked={true} /> long</label></li>
                    </ul>
                </div>
                <div className={styles.radioLyt}>
                    <Text fontSize='sm' fontWeight='bold'>Day: </Text>
                    <ul>
                        <li><label><input type='radio' name='day_input' value={'numeric'} onChange={((e: any) => setDayVal(e.target.value))} /> numeric</label></li>
                        <li><label><input type='radio' name='day_input' value={'2-digit'} onChange={((e: any) => setDayVal(e.target.value))} defaultChecked={true} /> 2-digit</label></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default DateFormatted;
