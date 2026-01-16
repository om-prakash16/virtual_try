from fastapi import APIRouter, HTTPException
from schemas.contact import ContactCreate, ContactResponse

router = APIRouter()

@router.post("/", response_model=ContactResponse)
async def submit_contact_form(contact: ContactCreate):
    # TODO: Implement actual database storage or email sending logic here
    print(f"Received contact form submission from: {contact.email}")
    
    return {
        "id": 123, # Mock ID
        "message": "Thank you for reaching out! We received your request."
    }
