import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.span`
    font-family: Roboto, monospace;
`;

const BoltTitle = styled(StyledTitle)`
    font-size: 30px;
`;

const CapitalizedTitle = styled(StyledTitle)`
	text-transform: capitalize;
	font-size: 14px;
	//text-align: right;
	padding-left: 40px;
`;

const TitleContainer = styled.p`
	display: flex;
	flex-wrap: wrap;

	& > span{
		width: 100%;
	}
`;

const HeaderTitle: React.FC = () => {
return(
	<TitleContainer>
		<BoltTitle>kenmei</BoltTitle>
		<CapitalizedTitle>Technologies</CapitalizedTitle>
	</TitleContainer>
)
};

export default HeaderTitle;