import styled from 'styled-components';
import pxToRem from '../../../utils/pxToRem';
import RichTextSection from '../../blocks/RichTextSection';
import MediaSection from '../../blocks/MediaSection';

type Props = {
	data: any;
};

const PageBuilderWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${pxToRem(100)};
	position: relative;
	z-index: 2;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		gap: ${pxToRem(50)};
	}
`;

const PageBuilder = (props: Props) => {
	const { data } = props;

	const sections: any = {
		richText: RichTextSection,
		media: MediaSection
	};

	return (
		<PageBuilderWrapper className="page-builder">
			{data &&
				data.map((section: any, i: number) => {
					{
						if (!sections[section._type]) {
							return (
								<div key={Math.random() * 10000}>
									No section found for {section._type}
								</div>
							);
						} else {
							const Component = sections[section._type];
							return (
								<Component
									key={`${section._type}-${i}`}
									{...section}
								/>
							);
						}
					}
				})}
		</PageBuilderWrapper>
	);
};

export default PageBuilder;
