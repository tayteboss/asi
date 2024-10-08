import { useState, useEffect } from 'react';
import throttle from 'lodash.throttle';

const useScrolled = (amount: number) => {
	const [hasScrolled, setHasScrolled] = useState<boolean>(false);

	const handleScroll = (): void => {
		if (window.scrollY > amount) {
			setHasScrolled(true);
		} else {
			setHasScrolled(false);
		}
	};

	useEffect(() => {
		const throttledHandleScroll = throttle(handleScroll, 100);
		window.addEventListener('scroll', throttledHandleScroll);
		return () =>
			window.removeEventListener('scroll', throttledHandleScroll);
	}, []);

	return hasScrolled;
};

export default useScrolled;
