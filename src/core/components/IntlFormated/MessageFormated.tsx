import React from 'react';
import { FormattedMessage, FormattedRelativeTime } from 'react-intl';

import styles from "./intlFormated.module.scss";
import Text from '../Text';

interface MessageFormatedProps {
    id: string;
    defaultMessage?: string;
    values?: {};
}

function MessageFormated({ id, defaultMessage, values }: MessageFormatedProps) {
    return (
        <div className={styles.intFormatRow}>
            <Text fontWeight='bold'>FormattedMessage: </Text>
            <FormattedMessage
                id={id}
                defaultMessage={defaultMessage}
                values={values}
            />
        </div>
    );
}

export default MessageFormated;
