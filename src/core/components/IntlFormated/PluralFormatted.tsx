import { FormattedPlural } from 'react-intl';

import styles from "./intlFormated.module.scss";


import Text from '../Text';
import { useState } from 'react';
interface FormatPluralOptions {
    value: number;
    other?: any | string;
    zero?: any | string;
    one?: any | string;
    two?: any | string;
    few?: any | string;
    many?: any | string;
}

function PluralFormatted({ value, other, zero, one, two, few, many }: FormatPluralOptions) {
    const [valueVal, setValue] = useState<string | any >();
    const [otherVal, setOther] = useState<string | any >();
    const [zeroVal, setZero] = useState<string | any >();
    const [oneVal, setOne] = useState<string | any >();
    const [twoVal, setTwo] = useState<string | any >();
    const [fewVal, setFew] = useState<string | any >();
    const [manyVal, setMany] = useState<string | any >();
    return (

        <div className={styles.intFormatRow}>
            <div className={styles.intFormatRowHeadline}>
                <Text fontWeight='bold'>FormattedPlural: </Text>
                <FormattedPlural
                    value={valueVal ? valueVal : value}
                    other={otherVal ? otherVal : `You have ${3} messages.`}
                    zero={zeroVal ? zeroVal : zero}
                    one={oneVal ? oneVal : one}
                    two={twoVal ? twoVal : two}
                    few={fewVal ? fewVal : few}
                    many={manyVal ? manyVal : many}
                />
            </div>
        </div>
    );
}

export default PluralFormatted;
