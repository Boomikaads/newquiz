import { ImInfinite } from 'react-icons/im'
import { BiTimeFive } from 'react-icons/bi'
import { TbDeviceGamepad2 } from 'react-icons/tb'

const gameModes = [
	{
		icon: <TbDeviceGamepad2 className='text-3xl' />,
		title: 'Classic',
		description: 'Complete questions without fail to win! You have wildcards that can help you'
	},
	{
		icon: <BiTimeFive className='text-3xl' />,
		title: 'Time',
		description: 'Complete questions within the time limit to win! You can use wildcards'
	},
	{
		icon: <ImInfinite className='text-3xl' />,
		title: 'Infinite',
		description: 'Break your record by completing as many questions as you can! You can use wildcards'
	}
]

export default function GameModes () {
	return null;
}