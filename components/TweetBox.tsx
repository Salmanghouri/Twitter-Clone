import React from 'react'
import {
    CalendarIcon,
    EmojiHappyIcon,
    LocationMarkerIcon,
    PhotographIcon,
    SearchCircleIcon,
} from '@heroicons/react/outline'

function TweetBox(){

    const [input, setInput] = useState<string>('')
    return (
        // 57:32
        <div className="flex space-x-2 p-5">
            <img className='h-14 w-14 object-cover rounded-full mt-4' src="./avatar.jpg" alt="" />
            <div className="flex flex-1 items-center pl-2">
                <form className="flex flex-1 flex-col">
                    <input type="text" placeholder="What is Happining? "  className="h-24 w-full text-xl outline-none placeholder:text-xl"/>
                    <div className="flex items-center">
                        <div className="flex flex-1 space-x-2 text-twitter">
                            <PhotographIcon className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150" />
                            <SearchCircleIcon className="h-5 w-5" />
                            <EmojiHappyIcon className="h-5 w-5" />
                            <CalendarIcon className="h-5 w-5" />
                            <LocationMarkerIcon className="h-5 w-5" />
                        </div>
                        <button className="bg-twitter px-5 py-2 font-bold text-white rounded-full">Tweet</button>
                        <div>
                            {/*  */}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default TweetBox