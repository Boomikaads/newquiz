import Head from 'next/head'
import MainHome from '@/components/Home/MainHome'
import GameModes from '@/components/Home/GameModes'
import Categories from '@/components/Home/Categories'
import { useEffect } from 'react'

export default function Main () {
	useEffect(() => { window.onbeforeunload = () => null }, [])

	return (
		<>
			<Head>
				<title>QuizWhiz</title>
			</Head>
			<MainHome />
			<GameModes />
			<Categories />
			<style jsx global>
				{`
				html, body {
					height: 100%;
					margin: 0;
				}
				`}
			</style>
		</>
	)
}
