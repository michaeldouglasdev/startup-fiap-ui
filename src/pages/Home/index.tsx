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
import { Steps } from "antd";
import AssetImage from "../../components/AssetImage";
import Google from "../../assets/google-logo.png";
import Nubank from "../../assets/nubank-logo.png";
import {
	AiOutlineUser,
	AiOutlineSolution,
	AiOutlineSmile,
	AiOutlineUsergroupAdd,
} from "react-icons/ai";
import { LoadingOutlined } from "@ant-design/icons";
import Stepper from "../../components/Steps";

const { Step } = Steps;

const Home: React.FC = () => {
	return (
		<>
			<Root titlePage="Home">
				<HBox>
					<Panel title="Estatísticas Semanais">
						<HBox justifyContent="space-between">
							<Feedback
								value={2}
								progressValue={60}
								description="Novas Vagas"
								color="#3bff8c"
							></Feedback>

							<Feedback
								value={4}
								progressValue={30}
								description="Novos Cursos"
							></Feedback>

							<Feedback
								value={3}
								progressValue={40}
								description="Novos Exames"
								color="#f68d02"
							></Feedback>
						</HBox>
					</Panel>
					<HSeparator />
					<Panel title="Progresso"></Panel>
				</HBox>

				<VSeparator />
				<HBox>
					<Panel title="Processos Seletivos" borderTitle={true}>
						<VBox>
							<Panel title="Google" noShadow={true} hasBorder={true}>
								<HBox alignItems="center">
									<AssetImage src={Google} rounded={true} />
									<HSeparator />
									<Stepper title="Engenheiro Mobile">
										<Step
											status="finish"
											title="Entrevista Remota "
											icon={<AiOutlineUser />}
										/>
										<Step
											status="finish"
											title="Prova Online"
											icon={<AiOutlineSolution />}
										/>
										<Step
											status="process"
											title="Entrevista Presencial"
											icon={<LoadingOutlined />}
										/>
										<Step
											status="wait"
											title="Concluído"
											icon={<AiOutlineSmile />}
										/>
									</Stepper>
								</HBox>
							</Panel>

							<VSeparator />

							<Panel title="Nubank" noShadow={true} hasBorder={true}>
								<HBox alignItems="center">
									<AssetImage src={Nubank} rounded={true} />
									<HSeparator />
									<Stepper title="Cientista de Dados">
										<Step
											status="finish"
											title="Entrevista Remota "
											icon={<AiOutlineUser />}
										/>
										<Step
											status="process"
											title="Prova Online"
											icon={<LoadingOutlined />}
										/>
										<Step
											status="wait"
											title="Entrevista Presencial"
											icon={<AiOutlineUsergroupAdd />}
										/>
										<Step
											status="wait"
											title="Concluído"
											icon={<AiOutlineSmile />}
										/>
									</Stepper>
								</HBox>
							</Panel>
						</VBox>
					</Panel>
				</HBox>
			</Root>
		</>
	);
};

export default Home;
