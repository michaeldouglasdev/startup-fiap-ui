import React, { useCallback, useMemo } from 'react';
import { format } from 'date-fns';
import { AiOutlineClockCircle } from 'react-icons/ai'
import { Container, Title, Description, RegisterDate, Salary } from './styles';
import { VBox, HBox, VSeparator, ExpansedBox } from '../Position/styled';
import Location from '../Location';
import Button from '../Button';
import { RequiredSkillsColorMapper } from '../../utils/mappers/RequiredSkillsColorMapper';
import { Tag } from 'antd';

interface JobOpportunityProps {
  title: string;
  description: string;
  city: string;
  state: string;
  date: string;
  salary: number;
  requiredSkills?: string[];
  onClick: (param: any) => any;
  onApplyClick?: () => void;
}

const JobOpportunity: React.FC<JobOpportunityProps> = ({ title, description, city, state, date, salary, requiredSkills, onApplyClick, onClick }) => {

  const formatedDate = useMemo(() => {
    return date ? format(new Date(date), 'dd/MM/yyyy') : null
  }, [date]);

  const formatedSalary = useMemo(() => {
    return `R$ ${salary},00`;
  }, [salary]);

  const handleApplyClick = useCallback((e) => {
    e.stopPropagation();
  }, []);

  return (
    <>
      <Container onClick={onClick}>
        <VBox>
          <HBox justifyContent="space-between">
            <Title>{title}</Title>
            {requiredSkills && (
              <HBox alignSelf="center">
                {requiredSkills.map((requiredSkill) => (
                  <Tag color={RequiredSkillsColorMapper.map(requiredSkill)}>{requiredSkill.toLowerCase()}</Tag>
                ))}
              </HBox>
            )}
          </HBox>
          <Salary>{formatedSalary}</Salary>
          <ExpansedBox>
            <Description>{description}</Description>
          </ExpansedBox>
          <VSeparator />
          <HBox justifyContent="space-between">
            <Location city={city} state={state} />

            {date &&
              <HBox alignItems="center">
                <AiOutlineClockCircle />
                <RegisterDate>{formatedDate}</RegisterDate>
              </HBox>
            }
          </HBox>

          <Button typeStyle="primary" onClick={handleApplyClick} >Candidatar-se</Button>
        </VBox>
      </Container>
    </>
  )
}

export default JobOpportunity;