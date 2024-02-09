import React, { useState } from 'react';
import { FormattedRelativeTime } from 'react-intl';

import styles from "./intlFormated.module.scss";
import Text from '../Text';

interface RelativeTimeFormattedProps {
    date?: number
    unit?: "hour" | "minute" | "second"
}
function RelativeTimeFormatted({ date = 5, unit = 'second' }: RelativeTimeFormattedProps) {
    const [unitVal, setUnitVal] = useState<"hour" | "minute" | "second">();
    const [dateVal, setDateVal] = useState<any>();
    const [updTime, setUpdTime] = useState<any>();
    return (
        <div className={styles.intFormatRow}>
            <div className={styles.intFormatRowHeadline}>
                <Text fontWeight='bold'>RelativeTimeFormatted: </Text>
                <FormattedRelativeTime
                    value={dateVal ? dateVal : date}
                    unit={unitVal ? unitVal : unit}
                    updateIntervalInSeconds={updTime ? updTime : 1}
                    numeric="auto"
                />
            </div>
            <div className={styles.intFormatRowSettings}>
                <div className={styles.row}>
                    <Text fontSize='sm' fontWeight='medium'>Count: </Text> <input name='updTime_input' defaultValue={1} type='number' onChange={(e: any) => setUpdTime(e.target.value)} />
                </div>
                <div className={styles.row}>
                    <Text fontSize='sm' fontWeight='medium'>Date:</Text>
                    <input name='date_input' type='date' onChange={(e: any) => setDateVal(e.target.value)} />
                </div>

                <div className={styles.radioLyt}>
                    <Text fontSize='sm' fontWeight='bold'>Unit: </Text>
                    <ul>
                        <li><label><input type='radio' name='RelativeTime_input' value={'hour'} onChange={((e: any) => setUnitVal(e.target.value))} /> hour</label></li>
                        <li><label><input type='radio' name='RelativeTime_input' value={'minute'} onChange={((e: any) => setUnitVal(e.target.value))} /> minute</label></li>
                        <li><label><input type='radio' name='RelativeTime_input' value={'second'} onChange={((e: any) => setUnitVal(e.target.value))} defaultChecked={true} /> second</label></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default RelativeTimeFormatted;
