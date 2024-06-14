import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { IconCarouselProps, MainPageType } from '../../../shared/types/types';
import BlurContentLayout from '../../layout/BlurContentLayout';
import BlurMainContent from '../BlurMainContent';
import ColumnsWrapper from '../../layout/ColumnsWrapper';
import ColumnCard from '../../elements/ColumnCard';
import VideoSection from '../VideoSection';
import IconCarousel from '../IconCarousel';
import pxToRem from '../../../utils/pxToRem';

type Props = {
	title: string | null;
	content: MainPageType['aboutTheAlliance'];
	fetchAiContent: MainPageType['fetchAiContent'];
	fetchAiLink: MainPageType['fetchAiLink'];
	singularityNetContent: MainPageType['singularityNetContent'];
	singularityNetLink: MainPageType['singularityNetLink'];
	oceanProtocolContent: MainPageType['oceanProtocolContent'];
	oceanProtocolLink: MainPageType['oceanProtocolLink'];
	videoData: MainPageType['videoTwo'];
	videoMobileData?: MainPageType['videoTwoMobile'];
	fetchAiThumbnail: MainPageType['fetchAiThumbnail'];
	singularityNetThumbnail: MainPageType['singularityNetThumbnail'];
	oceanProtocolThumbnail: MainPageType['oceanProtocolThumbnail'];
};

const AllianceSectionWrapper = styled.section`
	position: relative;
	z-index: 2;

	.blur-content-layout {
		margin-bottom: ${pxToRem(40)};

		@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
			margin-bottom: ${pxToRem(24)};
		}
	}
`;

const DesktopWrapper = styled.div`
	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		display: none;
	}
`;

const MobileWrapper = styled.div`
	display: none;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		display: block;
	}
`;

const AllianceSection: React.FC<Props> = (props: Props) => {
	const {
		title,
		content,
		fetchAiThumbnail,
		fetchAiContent,
		fetchAiLink,
		singularityNetThumbnail,
		singularityNetContent,
		singularityNetLink,
		oceanProtocolThumbnail,
		oceanProtocolContent,
		oceanProtocolLink,
		videoData,
		videoMobileData
	} = props;

	const [carouselData, setCarouselData] = useState<IconCarouselProps>([]);
	const [columnData, setColumnData] = useState<
		{
			type: string;
			title: string;
			content: string;
			link: string;
			image: string;
		}[]
	>([]);

	useEffect(() => {
		const initialCarouselData: IconCarouselProps = [
			{
				type: 'fetch',
				title: 'Fetch.ai',
				content: fetchAiContent,
				link: fetchAiLink,
				image: fetchAiThumbnail
			},
			{
				type: 'singularity',
				title: 'Singularity Net',
				content: singularityNetContent,
				link: singularityNetLink,
				image: singularityNetThumbnail
			},
			{
				type: 'ocean',
				title: 'Ocean Protocol',
				content: oceanProtocolContent,
				link: oceanProtocolLink,
				image: oceanProtocolThumbnail
			}
		];

		const randomOrder = (data: IconCarouselProps) => {
			return data.sort(() => Math.random() - 0.5);
		};

		setCarouselData(randomOrder(initialCarouselData));
		setColumnData(randomOrder(initialCarouselData));
	}, [
		fetchAiContent,
		fetchAiLink,
		singularityNetContent,
		singularityNetLink,
		oceanProtocolContent,
		oceanProtocolLink
	]);

	return (
		<AllianceSectionWrapper
			className="section-padding-y performance"
			id="about-the-alliance"
		>
			<BlurContentLayout>
				<BlurMainContent title={title} content={content} />
				<DesktopWrapper>
					<ColumnsWrapper>
						{columnData.map((item) => (
							<ColumnCard
								key={item.type}
								type={item.type}
								title={item.title}
								content={item.content}
								link={item.link}
								image={item.image}
							/>
						))}
					</ColumnsWrapper>
				</DesktopWrapper>
			</BlurContentLayout>
			<MobileWrapper>
				{carouselData.length > 0 && (
					<IconCarousel data={carouselData} />
				)}
			</MobileWrapper>
			<VideoSection
				data={videoData}
				mobileData={videoMobileData}
				animateIn
				index={2}
				key={2}
			/>
		</AllianceSectionWrapper>
	);
};

export default AllianceSection;
