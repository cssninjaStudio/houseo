export function initWizard() {
  return {
    activeWizardStep: "wizard-step-0",
    projectTypeSelected: false,
    selectProjectType() {
      this.projectTypeSelected = true;
    },
    servicesSelected: false,
    selectServices() {
      this.servicesSelected = true;
    },
    budgetSelected: false,
    selectBudget() {
      this.budgetSelected = true;
    },

    browseWizard(e) {
      const targetStep = e.target.getAttribute("data-step");
      e.target.classList.add("is-loading");
      setTimeout(() => {
        e.target.classList.remove("is-loading");
        this.activeWizardStep = targetStep;
      }, 1200);
    },

    browseBackWizard(e) {
      const targetStep = e.target.getAttribute("data-step");
      this.activeWizardStep = targetStep;
    },
  };
}
