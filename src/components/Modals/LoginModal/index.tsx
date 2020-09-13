import React, { useCallback, useRef, useState } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { AiOutlineIdcard, AiOutlineLock, AiOutlineUser } from 'react-icons/ai';
import { BsCardText } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';
import * as Yup from "yup";

import { Link } from 'react-router-dom';
import Button from '../../Button';
import Input from '../../Input';
import { VSeparator } from '../../Position/styled';
import Modal, { ModalProps } from '../Modal';
import { FormStyled, LinkSignUp } from './styles';
import getValidationErrors from '../../../utils/getValidationErrors';
import api from '../../../services/api';
import { useToast } from '../../../providers/ToastProvider';

interface LoginModal extends ModalProps {
  onSubmit: () => void;
  visible: boolean
}

interface CandidateSignUpFormData {
  name: string;
  email: string;
  password: string;
}

interface CandidateRecruiterSignInFormData {
  email: string;
  password: string;
}
const LoginModal: React.FC<LoginModal> = ({ title, visible, onSubmit, onClose }) => {

  const [isSignIn, setIsSignIn] = useState<boolean>(true);
  const [isCompany, setIsCompany] = useState<boolean>(true);
  const { addToast } = useToast();
  const companySignInFormRef = useRef<FormHandles>(null);
  const companySignUpFormRef = useRef<FormHandles>(null);
  const candidateRecruiterSignInFormRef = useRef<FormHandles>(null);
  const candidateRecruiterSignUpFormRef = useRef<FormHandles>(null);

  const onSubmitCandidateSignIn = useCallback(async (data: CandidateRecruiterSignInFormData) => {

    try {
      const schema = Yup.object().shape({
        email: Yup.string().email("Digite um e-mail válido"),
        password: Yup.string().min(6, "Senha mínimo de 6 dígitos"),
      })

      await schema.validate(data, {
        abortEarly: false,
      });

      const response = await api.post("/users/authenticate", data);
      console.log("response login candidate", response);

    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err)
        candidateRecruiterSignUpFormRef.current?.setErrors(errors);
      }
    }

  }, []);

  const onSubmitCandidateSignUp = useCallback(async (data: CandidateSignUpFormData) => {
    try {
      candidateRecruiterSignUpFormRef.current?.setErrors([]);

      const schema = Yup.object().shape({
        name: Yup.string().required("Nome obrigatório"),
        email: Yup.string().email("Digite um e-mail válido"),
        password: Yup.string().min(6, "Senha mínimo"),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      const response = await api.post("/users", data);
      console.log("response", response);

      onClose();
      addToast({
        type: "success",
        title: "Cadastro realizado!",
        description: "Você já pode efetuar seu login no Vaga Certa!",
      });

    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);
        candidateRecruiterSignUpFormRef.current?.setErrors(errors);

        return;
      }
    }
  }, []);

  const onSubmitCompanySignIn = useCallback((form: FormData) => {

  }, []);

  const onSubmitCompanySignUp = useCallback((form: FormData) => {

  }, []);
  return (
    <Modal title={title} visible={visible} onClose={onClose}>

      {isCompany
        ?
        <>
          {isSignIn
            ?
            <FormStyled ref={candidateRecruiterSignInFormRef} onSubmit={onSubmitCandidateSignIn}>
              <Input name="email" icon={FiMail} placeholder="E-mail" small />
              <Input name="password" type="password" icon={AiOutlineLock} placeholder="Senha" small />
              <Button type="submit" typeStyle="primary" expanded>Entrar</Button>
              <VSeparator />
              <LinkSignUp onClick={() => setIsSignIn(!isSignIn)}>Ainda não tem uma conta? Cadastre-se</LinkSignUp>
            </FormStyled>
            :
            <>
              <FormStyled ref={candidateRecruiterSignUpFormRef} onSubmit={onSubmitCandidateSignUp}>
                <Input name="name" icon={AiOutlineUser} placeholder="Nome" small />
                <Input name="email" icon={FiMail} placeholder="E-mail" small />
                <Input name="password" type="password" icon={AiOutlineLock} placeholder="Senha" small />
                <Button type="submit" typeStyle="primary" expanded>Entrar</Button>
                <VSeparator />
                <LinkSignUp onClick={() => setIsSignIn(!isSignIn)}>Já tenho uma conta. Ir para o login.</LinkSignUp>
              </FormStyled>
            </>
          }
        </>
        :
        <>
          {isSignIn
            ?
            <FormStyled onSubmit={onSubmitCandidateSignIn}>
              <Input name="cnpj" icon={BsCardText} placeholder="CNPJ" small />
              <Input name="password" type="password" icon={AiOutlineLock} placeholder="Senha" small />
              <Button type="submit" typeStyle="primary" expanded>Entrar</Button>
              <VSeparator />
              <LinkSignUp>Ainda não tem uma conta? Cadastre-se</LinkSignUp>
            </FormStyled>
            :
            <></>
          }
        </>
      }

    </Modal>
  )
}

export default LoginModal;