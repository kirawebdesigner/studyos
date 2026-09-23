# StudyOS Schema

The canonical database schema is in `supabase/migrations/20260924000001_init_studyos.sql`.

Documents own chunks and concepts. Concepts own questions. Users own attempts and mastery rows. `concept_mastery` uses `(user_id, concept_id)` as its composite key.
