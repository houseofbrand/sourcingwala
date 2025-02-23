document.addEventListener("DOMContentLoaded", () => {
    // Ordering guidelines for categories that have subcategories
    const orderingGuidelines = {
      sunglasses: "For sunglasses, please ensure you specify the lens type and frame color. Orders must be placed by 10 AM local time.",
      watches: "For watches, please note that warranty details are included in the PDF. Verify model specifications before ordering.",
      lingerie: "For lingerie, please check our size guide and color availability. Orders are subject to stock confirmation."
    };
  
    const categoryElements = document.querySelectorAll('.category');
    
    categoryElements.forEach(category => {
      category.addEventListener('click', function () {
        const cat = this.getAttribute('data-category');
        let subcategories = [];
        
        // Define subcategories for categories that have them
        if (cat === 'sunglasses' || cat === 'watches') {
          subcategories = ['Men', 'Women', 'Kids'];
        } else if (cat === 'lingerie') {
          subcategories = ['Babydoll', 'Lingerie Set', 'Pack of 3 Panties', 'Co-Ord Set'];
        } else if (cat === 'accessorygiftset') {
          // For categories without subcategories, open the PDF directly.
          window.open('assets/pdfs/' + cat + '.pdf', '_blank');
          return;
        }
        
        // Build the subcategories overlay with ordering guidelines and heading.
        const subCatContainer = document.querySelector('#subcategories .subcategories-content');
        const guidelinesText = orderingGuidelines[cat] || "";
        subCatContainer.innerHTML = `<h2>Catalogue PDF Download</h2>
          <p class="ordering-guidelines">${guidelinesText}</p>
          <h3>Select your option:</h3>`;
        
        // Create subcategory buttons
        subcategories.forEach(sub => {
          const btn = document.createElement('button');
          btn.textContent = sub;
          btn.classList.add('sub-btn');
          btn.addEventListener('click', function () {
            // Construct PDF URL (e.g., watches-men.pdf)
            const pdfUrl = 'assets/pdfs/' + cat + '-' + sub.toLowerCase().replace(/\s/g, '') + '.pdf';
            window.open(pdfUrl, '_blank');
          });
          subCatContainer.appendChild(btn);
        });
        
        document.getElementById('subcategories').classList.remove('hidden');
      });
    });
    
    // Close the subcategories overlay.
    document.getElementById('closeSubcategories').addEventListener('click', function () {
      document.getElementById('subcategories').classList.add('hidden');
    });
  });
  