/* <span className="form-item">
<input
    type="checkbox"
    value="I Agree"
    id="terms1"
    name="terms1Question"
    required
    className={`${errors.terms1Question ? "invalid" : ""}`}
    error={errors.terms1Question && errors.terms1Question.message}
    ref={register({
        required: "Ovo polje je obavezno"
    })}
/>
<label htmlFor="terms1">
    Saglasan sam da mi se odmah po obavljenoj kupovini omogući pristup NetTV Plus usluzi i potvrđujem da sam svestan da time gubim pravo na odustanak od
    kupovine u zakonom predviđenom roku.
</label>
{errors.terms1Question && <span name="terms2Question" error={errors.terms1Question && errors.terms1Question.message} />}
</span> */
