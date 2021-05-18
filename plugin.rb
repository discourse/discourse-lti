# frozen_string_literal: true

# name: discourse-lti
# about: Add support for login via LTI 1.3
# version: 1.0
# authors: David Taylor
# url: https://github.com/discourse/discourse-lti
# transpile_js: true

enabled_site_setting :lti_enabled

module ::DiscourseLti
end

require_relative 'lib/discourse_lti/lti_omniauth_strategy'
require_relative 'lib/discourse_lti/lti_authenticator'

auth_provider authenticator: ::DiscourseLti::LtiAuthenticator.new
