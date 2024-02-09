import { FormattedNumber } from 'react-intl';

import styles from "./intlFormated.module.scss";
import Text from '../Text';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../store/reducer';

interface CurrencyFormattedProps {
    amount: number;
    currency: string;
    style: "currency" | "unit" | "decimal" | "percent" | undefined;
}

function CurrencyFormatted({ amount, currency, style }: CurrencyFormattedProps) {
    const [value, setValue] = useState<number | undefined>()
    const [currencyVal, setCurrencyVal] = useState<string | undefined>()
    const [styleVal, setStyleVal] = useState< "currency" | "unit" | "decimal" | "percent">()

    return (
        <div className={styles.intFormatRow}>
            <div className={styles.intFormatRowHeadline}>
                <Text fontWeight='bold'>Currency: </Text>
                <FormattedNumber
                    value={value ? value : amount}
                    style={styleVal ? styleVal : style}
                    currency={currencyVal ? currencyVal : currency}
                />
            </div>

            <div className={styles.intFormatRowSettings}>

                <div className={styles.row}>
                    <Text fontSize='sm' fontWeight='medium'>Amount: </Text> <input name='value_input' defaultValue={amount} type='number' onChange={(e: any) => setValue(e.target.value)} />
                </div>
                <div className={styles.row}>
                    <Text fontSize='sm' fontWeight='medium'>Currency: </Text> <input name='currencu_input' defaultValue={currency} type='text' onChange={(e: any) => setCurrencyVal(e.target.value)} />
                </div>
                <div className={styles.radioLyt}>
                    <Text fontSize='sm' fontWeight='bold'>Style: </Text>
                    <ul>
                        <li><label><input type='radio' name='style_input' value={'currency'} onChange={((e:any) => setStyleVal(e.target.value ) )} defaultChecked={true} /> currency</label></li>
                        <li><label><input type='radio' name='style_input' value={'unit'} onChange={((e:any) => setStyleVal(e.target.value ) )} /> unit</label></li>
                        <li><label><input type='radio' name='style_input' value={'decimal'} onChange={((e:any) => setStyleVal(e.target.value ) )} /> decimal</label></li>
                        <li><label><input type='radio' name='style_input' value={'percent'} onChange={((e:any) => setStyleVal(e.target.value ) )} /> percent</label></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default CurrencyFormatted;
