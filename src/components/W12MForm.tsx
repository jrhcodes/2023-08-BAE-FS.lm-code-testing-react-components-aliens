import { useState } from 'react';
import W12MHeader from './W12MHeader';

const W12MForm = () => {
	return (
		<section data-testid="w12MForm" className='w12MForm'>
			<W12MHeader />
			{/* REST OF FORM GOES HERE */}
		</section>
	);
};

export default W12MForm;
