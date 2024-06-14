import styled from 'styled-components';
import AnimateText from '../../layout/AnimateText';
import pxToRem from '../../../utils/pxToRem';
import { useInView } from 'react-intersection-observer';
import formatHTML from '../../../utils/formatHTML';

type Props = {
	title?: string | null;
	subheading?: string | null;
	content?: string | null;
	useLargeTitle?: boolean;
	points?: string[] | null;
};

const BlurMainContentWrapper = styled.div``;

const Title = styled.h2`
	margin-bottom: ${pxToRem(40)};

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		margin-bottom: ${pxToRem(28)};
	}
`;

const Subheading = styled.h3`
	margin-bottom: ${pxToRem(24)};
`;

const Ul = styled.ul`
	margin-bottom: ${pxToRem(36)};
	padding-left: ${pxToRem(20)};
`;

const Li = styled.li`
	position: relative;
	list-style-type: disc;
	padding-left: 1px;
	font-size: ${pxToRem(30)};
	line-height: ${pxToRem(39)};
	letter-spacing: -0.9px;
	font-weight: 200;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		font-size: ${pxToRem(20)};
		line-height: ${pxToRem(25)};
	}
`;

const Content = styled.div``;

const BlurMainContent = (props: Props) => {
	const { title, useLargeTitle = false, subheading, content, points } = props;

	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.1,
		rootMargin: '-50px'
	});

	return (
		<BlurMainContentWrapper>
			{title && (
				<Title
					className={`${
						useLargeTitle
							? 'type-h1 type-h1--blur-in'
							: 'type-h2 type-h2--blur-in'
					}`}
					ref={ref}
				>
					<AnimateText text={title} active={inView} />
				</Title>
			)}
			{subheading && (
				<Subheading className="type-h3 type-h3--blur-in">
					<AnimateText text={subheading} active={inView} />
				</Subheading>
			)}
			{points && points.length > 0 && (
				<Ul>
					{points.map((point, i) => (
						<Li key={i}>{point}</Li>
					))}
				</Ul>
			)}
			{content && (
				<Content
					className={`rich-text view-element-fade-in ${
						inView ? 'view-element-fade-in--in-view' : ''
					}`}
					dangerouslySetInnerHTML={{
						__html: formatHTML(content)
					}}
				/>
			)}
		</BlurMainContentWrapper>
	);
};

export default BlurMainContent;
