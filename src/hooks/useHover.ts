import { RefObject, useEffect, useRef, useState } from "react"


export const useHover = (): {hovered: boolean, ref: RefObject<HTMLDivElement>} => {
	const ref = useRef<HTMLDivElement>(null);
	const [hovered, setHovered] = useState(false);

	useEffect(() => {
		const handleMouseOver = () => setHovered(true);
		const handleMouseOut = () => setHovered(false);

		const element = ref.current;
		if (element) {
		  element.addEventListener('mouseover', handleMouseOver);
		  element.addEventListener('mouseout', handleMouseOut);
		}

		return () => {
			element?.removeEventListener('mouseover', handleMouseOver);
			element?.removeEventListener('mouseout', handleMouseOut);
		}
	}, [ref])

	return {hovered, ref}
}
