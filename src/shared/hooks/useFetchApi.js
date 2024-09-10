import { useEffect, useState } from 'react'

export const useFetchApi = reference => {
	const url = process.env.REACT_APP_URL || ''
	const token = process.env.REACT_APP_AMOCRM_LONG_TERM_TOKEN || ''
	const [dataApi, setDataApi] = useState([])

	console.log(dataApi, 'dataApi-----------')

	const getData = async () => {
		console.log(reference.current, 'reference-----------')

		const config = {
			method: 'GET',

			headers: {
				Authorization:
					'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjZiNzViYWY1NWI2YmUwNzBkYTY2ZWQzYTQ3ODJmYTc5NzcwNzhhNTIzNTY3MTczNDE1MDg2ZjcwMzNlZjFjOWM4NmU5ZjA5MTY3ZDU2ZmNkIn0.eyJhdWQiOiJmMGM2ODY1MS1jMWE5LTRiZGMtYTRhMi02YjNjYmRiOTY4OWUiLCJqdGkiOiI2Yjc1YmFmNTViNmJlMDcwZGE2NmVkM2E0NzgyZmE3OTc3MDc4YTUyMzU2NzE3MzQxNTA4NmY3MDMzZWYxYzljODZlOWYwOTE2N2Q1NmZjZCIsImlhdCI6MTcyNTg3OTMzNCwibmJmIjoxNzI1ODc5MzM0LCJleHAiOjE3MzIwNjA4MDAsInN1YiI6IjExNDk1MTY2IiwiZ3JhbnRfdHlwZSI6IiIsImFjY291bnRfaWQiOjMxOTQwODEwLCJiYXNlX2RvbWFpbiI6ImFtb2NybS5ydSIsInZlcnNpb24iOjIsInNjb3BlcyI6WyJjcm0iLCJmaWxlcyIsImZpbGVzX2RlbGV0ZSIsIm5vdGlmaWNhdGlvbnMiLCJwdXNoX25vdGlmaWNhdGlvbnMiXSwiaGFzaF91dWlkIjoiZDZhYzFjNWYtY2I5Ni00ZTVlLWE2NDUtYTZmYTljMDJhZDE4IiwiYXBpX2RvbWFpbiI6ImFwaS1iLmFtb2NybS5ydSJ9.Yj4fVczCC0PAVNf3S_cBAOtAXWBAYTcOnGry5XvLwjNmH3eeTFhMXaRzxofDWDNPKKMSmNLcPSfJuODDkoSv87411S6y-TvIg5XN-fBw0PWWedITWMptKgChc_SoyQZMe0iKz2ULkHg-ynnPII0AQjGAacBHI_T3vMfro1j-CBYSUqRGnzJA3lYjsHiI4NY30BLF1QqBzqJk04iZQAVgASt2FP-t04d7Ze2bb8BwUkawtXksNpn6ZCcmP_FBhKjyirYI7VO7v0ce0D0CAeAUo7fbIfAbxVsRq7Y840PonV2Vo2QU0f9ec3t1_54JIkMfd6xbZAXQZ1bX3bCRmwYMYQ',
			},
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Credentials': true,
			'Access-Control-Allow-Headers':
				'Content-Type, Authorization, X-Requested-With',
		}

		// const response = await fetch(url + 'leads', {
		// 	mode: 'no-cors',headers,
		// }).then(response => response.json())

		console.log(config, 'config-----------')

		const response = await fetch(
			'https://egorow198704.amocrm.ru/api/v4/leads',
			config
		)
			.then(response => response.json())
			.catch(error => console.error(error))

		// const response = await axios.create({
		// 	baseURL: 'https://egorow198704.amocrm.ru/api/v4/leads',
		// 	timeout: 333,
		// 	mode: 'no-cors',
		// 	headers: { Authorization: `Bearer ${token}` },
		// })

		setDataApi(response)
	}

	useEffect(() => {
		getData()
	}, [])

	// можно сделать чтобы хук возвращал весь объект
	useEffect(() => {
		// dataApi
		console.log(dataApi, 'dataApi useEffect-----------')
	}, [])

	return {
		dataApi,
		// name,
		// price,
		// id,
	}
}
