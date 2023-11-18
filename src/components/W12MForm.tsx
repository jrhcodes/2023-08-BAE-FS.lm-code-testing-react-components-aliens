import { useState } from 'react';
import W12MHeader from './W12MHeader';
import PlanetNameField from './PlanetNameField';
import NumberOfBeingsField from './NumberOfBeings';
import SpeciesNameField from './SpeciesNameField';

export interface W12MFromProps {
	id: string;
}

const W12MForm: React.FC<W12MFromProps> = (props) => {

	const [speciesNameFieldValue, setSpeciesNameFieldValue] = useState("");
	const getSpeciesName = () => speciesNameFieldValue;

	const [planetNameFieldValue, setPlanetNameFieldValue] = useState("");
	const getPlanetName = () => planetNameFieldValue;

	const [numberOfBeingsFieldValue, setNumberOfBeingsFieldValue] = useState("");
	const getNumberOfBeings = () => numberOfBeingsFieldValue;


	return (
		<section data-testid={props.id} className='w12MForm' id={props.id}>
			<W12MHeader />
			<SpeciesNameField id={`${props.id}--speciesNameField`}
				setSpeciesName={setSpeciesNameFieldValue}
				getSpeciesName={getSpeciesName}
			/>
			<PlanetNameField id={`${props.id}--planetNameField`}
				setPlanetName={setPlanetNameFieldValue}
				getPlanetName={getPlanetName}
			/>
			<NumberOfBeingsField id={`${props.id}--numberOfBeingsField`}
				setNumberOfBeings={setNumberOfBeingsFieldValue}
				getNumberOfBeings={getNumberOfBeings}
			/>

		</section>

	);
};

export default W12MForm;
