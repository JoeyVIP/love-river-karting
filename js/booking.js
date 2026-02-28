// Booking Form Multi-step Logic

let currentStep = 1;

function showStep(step) {
  // Hide all steps
  document.querySelectorAll('.form-step').forEach(s => {
    s.classList.remove('active');
  });
  
  // Show current step
  const stepElement = document.querySelector(`[data-step="${step}"]`);
  if (stepElement) {
    stepElement.classList.add('active');
  }
  
  currentStep = step;
}

function nextStep(step) {
  showStep(step);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function prevStep(step) {
  showStep(step);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Plan type change handler
document.addEventListener('DOMContentLoaded', function() {
  const planTypeRadios = document.querySelectorAll('input[name="plan_type"]');
  const specificPlanSelect = document.getElementById('specific_plan');
  
  if (planTypeRadios && specificPlanSelect) {
    planTypeRadios.forEach(radio => {
      radio.addEventListener('change', function() {
        const selectedType = this.value;
        
        // Hide all optgroups
        const optgroups = specificPlanSelect.querySelectorAll('optgroup');
        optgroups.forEach(group => {
          group.style.display = 'none';
          group.querySelectorAll('option').forEach(opt => opt.disabled = true);
        });
        
        // Show selected optgroup
        let targetGroupId = '';
        switch(selectedType) {
          case 'individual':
            targetGroupId = 'individual_options';
            break;
          case 'course':
            targetGroupId = 'course_options';
            break;
          case 'group':
            targetGroupId = 'group_options';
            break;
          case 'membership':
            targetGroupId = 'membership_options';
            break;
        }
        
        const targetGroup = document.getElementById(targetGroupId);
        if (targetGroup) {
          targetGroup.style.display = 'block';
          targetGroup.querySelectorAll('option').forEach(opt => opt.disabled = false);
          // Select first option in group
          const firstOption = targetGroup.querySelector('option');
          if (firstOption) {
            specificPlanSelect.value = firstOption.value;
          }
        }
      });
    });
  }
  
  // Form submission
  const bookingForm = document.getElementById('bookingForm');
  if (bookingForm) {
    bookingForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form data
      const formData = new FormData(this);
      const data = Object.fromEntries(formData.entries());
      
      console.log('Booking submitted:', data);
      
      // Show success message
      bookingForm.style.display = 'none';
      document.getElementById('bookingSuccess').style.display = 'block';
      
      // In production, this would send data to a server
      // fetch('/api/bookings', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data)
      // });
    });
  }
});
