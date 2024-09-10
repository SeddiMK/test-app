import React, { useEffect, useRef } from 'react'
import styles from './select.module.scss'

import { useFetchApi } from '../../../shared/hooks/useFetchApi'

export const UiCard = () => {
	const reference = useRef('leads')
	const { dataApi } = useFetchApi(reference)

	useEffect(() => {
		console.log(dataApi, 'dataApi UiCard +++++++++')
	}, [])

	return <div className={'leads-card' + styles.root}>UiCard</div>
}
