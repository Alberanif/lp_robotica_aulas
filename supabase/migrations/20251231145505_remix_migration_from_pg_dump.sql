CREATE EXTENSION IF NOT EXISTS "pg_graphql";
CREATE EXTENSION IF NOT EXISTS "pg_stat_statements" WITH SCHEMA "extensions";
CREATE EXTENSION IF NOT EXISTS "pgcrypto" WITH SCHEMA "extensions";
CREATE EXTENSION IF NOT EXISTS "plpgsql";
CREATE EXTENSION IF NOT EXISTS "supabase_vault";
CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA "extensions";
BEGIN;

--
-- PostgreSQL database dump
--


-- Dumped from database version 17.6
-- Dumped by pg_dump version 18.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: public; Type: SCHEMA; Schema: -; Owner: -
--



SET default_table_access_method = heap;

--
-- Name: interest_forms; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.interest_forms (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    nome text NOT NULL,
    idade text NOT NULL,
    horario text NOT NULL,
    telefone text NOT NULL,
    comentario text,
    created_at timestamp with time zone DEFAULT now() NOT NULL
);


--
-- Name: interest_forms interest_forms_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.interest_forms
    ADD CONSTRAINT interest_forms_pkey PRIMARY KEY (id);


--
-- Name: interest_forms Anyone can submit interest form; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Anyone can submit interest form" ON public.interest_forms FOR INSERT WITH CHECK (true);


--
-- Name: interest_forms Authenticated users can view submissions; Type: POLICY; Schema: public; Owner: -
--

CREATE POLICY "Authenticated users can view submissions" ON public.interest_forms FOR SELECT USING ((auth.role() = 'authenticated'::text));


--
-- Name: interest_forms; Type: ROW SECURITY; Schema: public; Owner: -
--

ALTER TABLE public.interest_forms ENABLE ROW LEVEL SECURITY;

--
-- PostgreSQL database dump complete
--




COMMIT;