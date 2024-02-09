import { FormattedList } from 'react-intl';

import styles from "./intlFormated.module.scss";
import Text from '../Text';
import { useEffect, useState } from 'react';

const ListFormatted = ({ list }: { list: any[] }) => {
    const [listVal, setListVal] = useState<any>()

    return (
        <div className={styles.intFormatRow}>
            <div className={styles.intFormatRowHeadline}>
                <Text fontWeight='bold'>ListFormatted: </Text>
                <FormattedList value={listVal ? listVal.split(',') : list} />

            </div>
            <div className={styles.intFormatRowSettings}>
                <div className={styles.row}>
                    <Text fontSize='sm' fontWeight='medium'>List text input: </Text>
                    <input name='list_input' placeholder='exp: Kiraz,Armut,Karpuz' defaultValue={list.join(',')} type='text' onChange={(e: any) => setListVal(e.target.value)} />
                </div>
            </div>
        </div>
    )
}

export default ListFormatted