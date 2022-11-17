# Did I create the proj with --database-postgresql + the other command?
# Is my controller named correctly?
class StaticPagesController < ApplicationController
    def root
    end

    def frontend_index
        render file: Rails.root.join('public', 'index.html')
    end
end
