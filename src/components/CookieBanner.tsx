"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const STORAGE_KEY = "amoxtli-cookies";

type CookiePrefs = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
};

const defaultPrefs: CookiePrefs = {
  necessary: true,
  analytics: false,
  marketing: false,
};

const CookieBanner = () => {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [prefs, setPrefs] = useState<CookiePrefs>(defaultPrefs);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      setVisible(true);
      return;
    }
    try {
      const parsed = JSON.parse(stored) as CookiePrefs;
      setPrefs({ ...defaultPrefs, ...parsed });
    } catch {
      setPrefs(defaultPrefs);
    }
  }, []);

  const save = (next: CookiePrefs) => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    }
    setPrefs(next);
    setVisible(false);
    setOpen(false);
  };

  const acceptAll = () =>
    save({ necessary: true, analytics: true, marketing: true });

  const rejectAll = () =>
    save({ necessary: true, analytics: false, marketing: false });

  if (!visible) return null;

  return (
    <>
      <div className="fixed bottom-4 left-0 right-0 z-50 flex justify-center px-4">
        <div className="flex w-full max-w-[980px] flex-col items-start gap-4 rounded-2xl border border-ink/10 bg-paper/95 p-5 shadow-[0_12px_32px_rgba(0,0,0,0.08)] backdrop-blur md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-ink/70">{t("cookies.message")}</p>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={rejectAll}
              className="min-h-[40px] rounded-full border border-ink/20 px-4 text-xs font-semibold text-ink transition-colors hover:border-brand-accent"
            >
              {t("cookies.reject")}
            </button>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="min-h-[40px] rounded-full border border-ink/20 px-4 text-xs font-semibold text-ink transition-colors hover:border-brand-accent"
            >
              {t("cookies.customize")}
            </button>
            <button
              type="button"
              onClick={acceptAll}
              className="min-h-[40px] rounded-full bg-brand-accent px-4 text-xs font-semibold text-paper transition-colors hover:bg-ink"
            >
              {t("cookies.accept")}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/40 px-4">
          <div className="w-full max-w-[620px] rounded-3xl border border-ink/10 bg-paper p-6 shadow-[0_20px_50px_rgba(0,0,0,0.18)]">
            <div className="flex items-start justify-between gap-6">
              <div>
                <h3 className="text-xl font-semibold text-ink">
                  {t("cookies.title")}
                </h3>
                <p className="mt-2 text-sm text-ink/70">
                  {t("cookies.subtitle")}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="text-sm text-ink/60 hover:text-ink"
                aria-label={t("cookies.close")}
              >
                {t("cookies.close")}
              </button>
            </div>

            <div className="mt-6 flex flex-col gap-4 text-sm text-ink/70">
              <div className="flex items-center justify-between rounded-2xl border border-ink/10 p-4">
                <div>
                  <p className="text-sm font-semibold text-ink">
                    {t("cookies.necessary.title")}
                  </p>
                  <p className="mt-1 text-xs text-ink/60">
                    {t("cookies.necessary.description")}
                  </p>
                </div>
                <span className="rounded-full bg-ink/10 px-3 py-1 text-[11px] text-ink/60">
                  {t("cookies.alwaysOn")}
                </span>
              </div>

              <label className="flex items-center justify-between rounded-2xl border border-ink/10 p-4">
                <div>
                  <p className="text-sm font-semibold text-ink">
                    {t("cookies.analytics.title")}
                  </p>
                  <p className="mt-1 text-xs text-ink/60">
                    {t("cookies.analytics.description")}
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={prefs.analytics}
                  onChange={(event) =>
                    setPrefs((prev) => ({
                      ...prev,
                      analytics: event.target.checked,
                    }))
                  }
                  className="h-4 w-4 accent-[#4F46E5]"
                />
              </label>

              <label className="flex items-center justify-between rounded-2xl border border-ink/10 p-4">
                <div>
                  <p className="text-sm font-semibold text-ink">
                    {t("cookies.marketing.title")}
                  </p>
                  <p className="mt-1 text-xs text-ink/60">
                    {t("cookies.marketing.description")}
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={prefs.marketing}
                  onChange={(event) =>
                    setPrefs((prev) => ({
                      ...prev,
                      marketing: event.target.checked,
                    }))
                  }
                  className="h-4 w-4 accent-[#4F46E5]"
                />
              </label>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={rejectAll}
                className="min-h-[40px] rounded-full border border-ink/20 px-4 text-xs font-semibold text-ink transition-colors hover:border-brand-accent"
              >
                {t("cookies.reject")}
              </button>
              <button
                type="button"
                onClick={() => save(prefs)}
                className="min-h-[40px] rounded-full bg-brand-accent px-4 text-xs font-semibold text-paper transition-colors hover:bg-ink"
              >
                {t("cookies.save")}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieBanner;
