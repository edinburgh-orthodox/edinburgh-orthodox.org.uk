# The calendar lives in Google Calendar, not a WordPress plugin

The website's services calendar is kept in an embedded **Google Calendar**. The volunteers
edit it in Google, without any WordPress login, instead of using a calendar plugin inside
WordPress (like The Events Calendar or Amelia).

Why: the people who update the schedule are not technical and not website admins. They need
to update the schedule and the weekly announcements themselves, then post them to WhatsApp,
Facebook, and email. Google Calendar needs no WordPress login, can be edited on any phone,
and the text and share links it produces cover the posting almost for free.

The trade-off we accepted: the calendar box on the homepage is limited to Google's own look,
so a fully custom calendar design (for example custom fasting-symbol styling) is not really
possible. It would also be costly to change our minds later, once volunteers are used to
editing Google, because moving a calendar off a plugin is painful.

Status: accepted, and revisited. The site is now a Hugo build (ADR-0002), so the trade-off
against a WordPress calendar plugin no longer applies, and a fully custom calendar design is
possible after all. What still stands is the reason: the volunteers edit the schedule in
Google, not inside the website. The homepage does not read Google Calendar yet; it renders
`edinburgh-orthodox/data/services.yaml`, and the generated week is typed in by hand. Issue #1
covers wiring it up or replacing it.
