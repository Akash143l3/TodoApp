"use client"
import React, { useState } from "react"; 
import InputEmoji from "react-input-emoji"; 

export default function EmojiInput() { 
const [text, setText] = useState(""); 

return ( 
	<div className="flex flex-col h-full w-full items-center "> 
	<form className="border h-64 w-96 mt-16 rounded-2xl bg-cyan-200">
	<h4 className="pt-20 text-center font-extrabold text-lg pb-10">NextJs EmojiPicker - GeeksforGeeks</h4> 
	<InputEmoji  
	value={text} 
	onChange={setText} 
	cleanOnEnter 
	placeholder="Type a message"
	/> 
	</form>
	</div> 
); 
}
