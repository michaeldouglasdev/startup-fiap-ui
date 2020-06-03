import React from "react";
import Panel from "../../components/Panel";
import Root from "../../components/Root";
import {
	HBox,
	VBox,
	HSeparator,
	VSeparator,
} from "../../components/Position/styled";
import Feedback from "../../components/Feedback";
import { Steps, Calendar, Badge } from "antd";
import AssetImage from "../../components/AssetImage";

import Google from "../../assets/google-logo.png";
import Nubank from "../../assets/nubank-logo.png";
import ReduxSaga from "../../assets/redux-saga-logo.png";
import CssNextLevel from "../../assets/css-next-level-logo.png";

import {
	AiOutlineUser,
	AiOutlineSolution,
	AiOutlineSmile,
	AiOutlineUsergroupAdd,
} from "react-icons/ai";
import { LoadingOutlined } from "@ant-design/icons";
import Stepper from "../../components/Steps";
import ProgressCourse from "../../components/ProgressCourse";
import { BadgeProps } from "antd/lib/badge/index";
import { PresetStatusColorType } from "antd/lib/_util/colors";
import JobOpportunity, { TagProps } from "../../components/JobOpportunity";
import Avatar1 from "../../assets/avatar-1.png";
import Avatar2 from "../../assets/avatar-2.png";
import Avatar3 from "../../assets/avatar-3.jpg";
import Avatar4 from "../../assets/avatar-4.jpg";
import Avatar5 from "../../assets/avatar-5.jpg";
import Avatar6 from "../../assets/avatar-6.png";
import Avatar7 from "../../assets/avatar-7.png";
import { ValuePanel } from "../../components/Typography/styles";

const { Step } = Steps;

interface Data {
	type: PresetStatusColorType;
	content: string;
}

const HomeRecruiter: React.FC = () => {
	const getListData = (value: moment.Moment): Data[] => {
		console.log("value", value.date());
		let listData: Data[] = [];
		if (value.month() == 5) {
			switch (value.date()) {
				case 4:
					listData = [
						{
							type: "success",
							content:
								"Entrevista remota com o Carlos de Andrade para a vaga 964.",
						},
					];
					break;
				case 5:
					listData = [
						{
							type: "success",
							content:
								"Início da prova online da Juliana Fernandes para a vaga 871.",
						},
					];
					break;
				case 8:
					listData = [
						{
							type: "success",
							content: "Exame admissional Gabriel Rodrigues.",
						},
						{ type: "warning", content: "Publicação automática da vaga 785." },
					];
					break;
				case 10:
					listData = [
						{
							type: "error",
							content:
								"Jonatas da Silva cancelou a entrevista para a vaga 964.",
						},
					];
					break;

				default:
			}
		}

		return listData;
	};

	const dateCellRender = (value: any) => {
		const listData = getListData(value);
		return (
			<ul className="events">
				{listData.map((item: Data) => (
					<li key={item.content}>
						<Badge status={item.type} text={item.content} />
					</li>
				))}
			</ul>
		);
	};

	const getMonthData = (value: any) => {
		if (value.month() === 8) {
			return 1394;
		}
	};

	const monthCellRender = (value: any) => {
		const num = getMonthData(value);
		return num ? (
			<div className="notes-month">
				<section>{num}</section>
				<span>Backlog number</span>
			</div>
		) : null;
	};

	const getTags = (type: number) => {
		let tags: TagProps[] = [];

		switch (type) {
			case 1: {
				tags = [
					{
						color: "blue",
						text: "react",
					},
					{
						color: "gold",
						text: "typescript",
					},
					{
						color: "magenta",
						text: "styled-components",
					},
				];
				break;
			}

			case 2: {
				tags = [
					{
						color: "gold",
						text: "power-bi",
					},
					{
						color: "geekblue",
						text: "python",
					},
					{
						color: "green",
						text: "dax",
					},
					{
						color: "blue",
						text: "sql",
					},
				];
				break;
			}
		}

		return tags;
	};

	return (
		<>
			<Root titlePage="Home">
				<HBox>
					<Panel title="Suas vagas">
						<JobOpportunity
							title="Desenvolvedor Front-end Jr."
							description="O foco do desenvolvedor será de componentizar nossa User Interface para ganhar mais velocidade e escala, acompanhando o ritmo de crescimento da empresa, sem perder a qualidade e afetar a UX. Você também vai: Trabalhar no desenvolvimento do ciclo de vida completo de projetos sensíveis ao tempo; Recomendar tecnologias apropriadas para implementar novos recursos; "
							tags={getTags(1)}
							potentialCandidates={[Avatar1, Avatar2, Avatar3]}
						></JobOpportunity>

						<VSeparator />
						<JobOpportunity
							title="Analista de BI Jr."
							description="Estruturar bases de dados e implementar rotinas automáticas para extração de dados. Desenvolvimento de Dashboards e relatórios através da ferramenta Power BI. Experiência em desenvolvimento de Dashboards na ferramenta MS - Power BI. Habilidades para customização de componentes Power BI e utilização de linguagem Dax,"
							tags={getTags(2)}
							potentialCandidates={[Avatar4, Avatar5, Avatar6, Avatar7]}
						></JobOpportunity>
					</Panel>
					<HSeparator />

					<VBox heightBox="unset">
						<HBox>
							<Panel
								title="Vagas em aberto"
								colorTitle="white"
								background="linear-gradient(to right, #4facfe 0%, #00f2fe 100%);"
							>
								<ValuePanel>2</ValuePanel>
							</Panel>
							<HSeparator />
							<Panel
								title="Canditatos em processo"
								colorTitle="white"
								background="linear-gradient(120deg, #f6d365 0%, #fda085 100%);"
							>
								<ValuePanel>3</ValuePanel>
							</Panel>
						</HBox>
						<VSeparator />
						<HBox>
							<Panel
								title="Aproveitamento da Plataforma"
								colorTitle="white"
								background="linear-gradient(120deg, #8fd3f4 0%, #84fab0 100%);"
							>
								<ValuePanel>97%</ValuePanel>
							</Panel>
							<HSeparator />
							<Panel
								title="Vagas encerradas"
								colorTitle="white"
								background="linear-gradient(to right, #ff8177 0%, #ff867a 0%, #ff8c7f 21%, #f99185 52%, #cf556c 78%, #b12a5b 100%);"
							>
								<ValuePanel>8</ValuePanel>
							</Panel>
						</HBox>
					</VBox>
				</HBox>
				<VSeparator />

				<HBox>
					<Panel title="Cronograma">
						<Calendar
							dateCellRender={dateCellRender}
							monthCellRender={monthCellRender}
						/>
					</Panel>
				</HBox>
			</Root>
		</>
	);
};

export default HomeRecruiter;
